class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
    }
    run(MediaPlayer) {
        this.MediaPlayer = MediaPlayer;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        });
        observer.observe(this.MediaPlayer.video);
    }
    handleIntersection(entries) {
        const entry = entries[0];
        const inVisble = entry.IntersectionRatio >= this.threshold;

        if (inVisble) {
            this.MediaPlayer.reproducir()
        }
        else {
            this.MediaPlayer.detener()

        }
    }
}

export default AutoPause;