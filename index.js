const app = new Vue({
    el: "#app",

    data: {
        waveHtml: `<svg viewBox="0 0 500 50" preserveAspectRatio="none">
                        <path d="M 0 20 L 0 50 L 1000 50 L 1000 20 Q 923 5 858 5 C 793 7 700 25 637 27 Q 560 32 500 20 Q 423 5 358 5 C 293 7 200 25 137 27 Q 60 32 0 20 Z"/>
                    </svg>`,
    }
})