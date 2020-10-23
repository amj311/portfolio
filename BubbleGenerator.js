class MouseParticleGenerator {
    constructor(el,html,eventTriggers,continuous,timeout) {
        this.targetEl = el;
        this.particleHtml = html;
        this.eventTriggers = eventTriggers || 'mouseenter';
        this.continuous= continuous || false;
        this.timeout = timeout || null;

        this.mouseOffsetX = 0;
        this.mouseOffsetY = 0;
        
        this.isActive = false;
        this.waiting = false;
    }

    activate() {
        if (["absolute","fixed"].lastIndexOf(this.targetEl.style.position) > -1) {
            console.log("Target element has innapropriate style.position for particle rendering.")
            return;
        }
        this.targetEl.style.position = "relative";
        let ctx = this;
        this.targetEl.addEventListener('mouseenter',(e)=>ctx.start(e));
        this.targetEl.addEventListener('mousemove',(e)=>ctx.updateMousePos(e));
        this.eventTriggers.forEach(t => this.targetEl.addEventListener(t,()=>ctx.attemptTrigger()) );
        this.targetEl.addEventListener('mouseleave',ctx.end);
        console.log("Activated particles for ",this.targetEl);
    }

    deactivate() {
        this.isActive = false;
        let ctx = this;
        this.targetEl.removeEventListener('mouseenter',(e)=>ctx.start(e));
        this.targetEl.removeEventListener('mousemove',(e)=>ctx.updateMousePos(e));
        this.targetEl.removeEventListener('mouseleave',ctx.end);
    }

    start(e) {
        this.isActive = true;
        this.updateMousePos(e);
    }
    end() {
        this.isActive = false;
    }

    updateMousePos(e) {
        const {x,y} = this.getTargetOffset(e);
        if (this.isActive) {
            this.mouseOffsetX = x;
            this.mouseOffsetY = y;
        }
    }

    getTargetOffset(e) {
        return {
            x: e.clientX-this.targetEl.getBoundingClientRect().left,
            y: e.clientY-this.targetEl.getBoundingClientRect().top
        }
    }

    attemptTrigger() {
        if (!this.waiting) {
            if (this.continuous) ctx.startRecursiveGenerate();
            else this.generateOnce();
        }
    }

    generateOnce() {
        this.renderParticle();
        this.waiting = true;
        setTimeout(()=>this.waiting=false, this.getWaitTime())
    }

    recursiveGenerate() {
        if (this.isActive && !this.waiting) {
            this.renderParticle();
            // do recursion

            // this.waiting = true;
            // let ctx = this;
            // setTimeout(()=> {
            //     this.waiting = false;
            //     this.recursiveGenerate();
            // }, ctx.getWaitTime());    
        }
    }

    renderParticle() {
        const wrapper = this.createWrapper();
        wrapper.innerHTML = this.particleHtml;
        this.targetEl.append(wrapper);
        
        let ctx = this;
        setTimeout(()=>wrapper.remove(), ctx.getParticleLifetime());
    }

    createWrapper() {
        const wrapper = document.createElement('div');
        wrapper.style = "position: absolute; width: 0; height: 0; user-select: none; pointer-events: none;";
        wrapper.style.top = this.mouseOffsetY+"px";
        wrapper.style.left = this.mouseOffsetX+"px";
        return wrapper;
    }

    getParticleLifetime() {
        return 2000;
    }
    getWaitTime() {
        return 800;
    }
}

class MouseBubbleGenerator extends MouseParticleGenerator {
    constructor(el) {
        let html = `<div class="particle-bubble" style="width:10px; height: 10px; border-radius: 50%; background: #fff5"></div>`
        super(el, html,['mousemove','click'],false, null);
    }
}



// class ParticleRenderer {
//     constructor() {
//         this.activeGenerators = [];
//     }

//     activateGenerator(generator) {
//         generator.activate;
//         this.activeGenerators.push(generator);
//     }
//     deactivateGenerator(generator) {
//         generator.deactivate;
//         this.activeGenerators = this.activateGenerator.filter(g=> g!=generator);
//     }
// }