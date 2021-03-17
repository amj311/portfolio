const iconClasses = {
  "email": "fa fa-envelope",
  "website": "fa fa-desktop",
  "linkedin": "fab fa-linkedin",
  "github": "fab fa-github",
  "award": "fa fa-bookmark",
}

function iconClass(code) {
  return iconClasses[code] || "";
}

const saveQueueManager = new ResumeSaveQueueManager();


Vue.component('editable', {
  template: `<div contenteditable="true" v-once v-html="value" :value="value" @input="$emit('input', $event.target.innerHTML)"></div>`,
  props: ['value'],
  watch: {
    value: function (newValue) {
      initVueSave();

      if (document.activeElement == this.$el) {
        return;
      }

      this.$el.innerHTML = newValue;
    }
  }
});



Vue.component('listItemControls',{
  template: `
  <div class='toolbar-button-list'>
    <a :disabled="!canBumpUp" @click="swapDist(-1)"><i class="fa fa-arrow-up"></i></a>
    <a :disabled="!canBumpDown" @click="swapDist(1)"><i class="fa fa-arrow-down"></i></a>
    <a @click="duplicate"><i class="far fa-clone"></i></a>
    <a @click="remove"><i class="fa fa-trash"></i></a>
  </div>
  `,
  props: ['list','idx'],
  computed: {
    canBumpUp() { return this.idx > 0 },
    canBumpDown() { return this.idx < this.list.length-1 },
  },
  methods: {
    swapDist(dist) {
      let targetIdx = this.idx+dist;
      let item = this.list[this.idx];
      let target = this.list[this.idx+dist]
      Vue.set(this.list,this.idx,target);
      Vue.set(this.list,targetIdx,item);
    },
    duplicate() {
      this.list.push({...this.list[this.idx]});
      initVueSave();
    },
    remove() {
      this.$delete(this.list,this.idx);
    }
  }
})


Vue.component('editableList',{
  template: `
  <div class='editable-list'>
    <div v-for="(item,i) in list">
      <div class="inline-toolbar-trigger-wrapper">
        <div class="inline-toolbar-target"><slot :item="item"></slot></div>
        <div class="inline-toolbar-wrapper">
          <div class="inline-toolbar">
            <listItemControls :list="list" :idx="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  props: ['list']
})


Vue.component('sectionlist',{
  template: `
  <div class='section-list'>
    <editableList :list="list">
      <template v-slot:default="slotProps">
        <resumesection :section='slotProps.item' />
      </template>
    </editableList>
  </div>
  `,
  props: ['list']
})

Vue.component('resumesection',{
  template: `
  <div class='resume-section'>
    <h2><editable v-model="section.title" /></h2>
    <h3 v-if="section.subtitle"><editable v-model="section.subtitle" /></h3>
    <div class="section-content">
      <div v-if="section.summary" class="section-summary"><editable v-model="section.summary" /></div>
      <editableList v-if="section.points?.length > 0" :list="section.points">
        <template v-slot:default="slotProps" class="point-list">
          <ul class="point-list-item-wrapper">
            <li :class="{'icon-list-item': slotProps.item.icon}">
              <i v-if="slotProps.item.icon" :class="iconClass(slotProps.item.icon)"></i><span><editable v-model="slotProps.item.content" /></span>
            </li>
          </ul>
        </template>
      </editableList>
      <sectionlist v-if="section.sections?.length > 0" :list="section.sections" class="sublist" />
    </div>
  </div>
  `,
  props: ['section'],
  methods: {
    iconClass(code) { return iconClass(code) }
  }
})


const app = new Vue({
  el: "#app",

  data: {
    loading: true,
    showOpenModal: false,
    allResumes: null,
    apiUrl: "http://localhost:4200/api",
    resume: null,
    currentSaveQueue: null,
    pdfImg: null,
    generatingImage: false,
    showPdfModal: false,
    showJsonModal: false,
    printGrayscale: false,
  },

  beforeMount() {
    setTimeout(this.startOpenSequence,2000);
  },

  watch: {
    resume(val) {
      console.log(val)
    }
  },

  methods: {
    iconClass(code) {
      return iconClasses[code] || "";
    },

    startOpenSequence() {
      this.showOpenModal = true;
      if (!this.allResumes) this.loadResumes();
    },

    setCurrentResume(resume) {
      this.resume = resume;
      this.currentSaveQueue = saveQueueManager.getNewQueue(resume._id);
    },

    loadResumes() {
      axios.get(this.apiUrl+"/resume/all")
      .then((res)=>{
        console.log(res)
        this.allResumes = res.data.resumes;
      })
      .catch( (err)=>{
        alert("Could not load resumes!");
        console.log(err);
      })
    },

    createNewResumeOnServer() {
      this.resume = {};

      axios.post(this.apiUrl+"/resume/create", defaultResumeData)
      .then((res)=>{
        console.log(res.data.newId)
        let newResume = {_id:res.data.newId, ...defaultResumeData};
        this.setCurrentResume(newResume);
        this.allResumes.push(newResume);
      })
      .catch( (err)=>{
        console.log(err);
        alert("Could not save!");
      })
    },

    saveResumeToServer() {
      this.currentSaveQueue.add(new ResumeSaveQueueRequest(this.sendSaveRequest, this.resume))
    },

    sendSaveRequest(payload,onSuccess=null,onFailure=null) {
      axios.put(this.apiUrl+"/resume/update", payload)
      .then((res)=>{
        console.log("Saved!")
        if (onSuccess) onSuccess(res);
      })
      .catch( (err)=>{
        console.log(err);
        alert("Could not save!");
        if (onFailure) onFailure(err);
      })
    },

    sendDeleteRequest(id,onSuccess=null,onFailure=null) {
      axios.delete(this.apiUrl+"/resume/"+id)
      .then((res)=>{
        console.log("Deleted!")
        this.allResumes = this.allResumes.filter(r => r._id != id);
        if (onSuccess) onSuccess(res);
      })
      .catch( (err)=>{
        console.log(err);
        alert("Could not delete!");
        if (id == this.resume._id) this.resume = null;
        if (onFailure) onFailure(err);
      })
    },

    browserPrint(){
      window.print();
    },

    generatePdfImg() {
      this.generatingImage = true;
      const tag = document.getElementById('page');
      const p = html2canvas(tag, {
        scale: 2,
        removeContainer: true,
      });
      let ctx = this;
      p.then(function (canvas) {
        ctx.pdfImg = canvas.toDataURL('image/png');
        ctx.generatingImage = false;
      })
    },
    peekPdf() {
      this.generatePdfImg();
      this.showPdfModal = true;
    },
    savePdf() {
      this.generatePdfImg();

      var doc = new jsPDF({
        unit: 'px',
        format: 'letter',
      });

      var width = doc.internal.pageSize.getWidth();
      var height = doc.internal.pageSize.getHeight();
      doc.addImage(img, 'JPEG', -10, 0, width, height);

      doc.save('resume.pdf');
    },
  },

  computed: {
    saveStatus() {
      if (!this.currentSaveQueue) return null;
      let status = this.currentSaveQueue.status();
      if (status == ResumeSaveQueue_Saved) return "All changes saved."
      if (status == ResumeSaveQueue_Error) return "Saving error."
      if (status == ResumeSaveQueue_Saving) return "Saving..."
    }
  }
})


function initVueSave() {
  app.saveResumeToServer();
}