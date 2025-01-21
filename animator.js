class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration}); //copies down all of the parameters into our object

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };


    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;

        const frame = this.currentFrame();

        if (this.elapsedTime > this.totalTime) {
            this.elapsedTime -= this.totalTime
        }

        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * frame, this.yStart,
            this.width, this.height,
            x, y,
            this.width*2, this.height*2
        );
    };


    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime); //if the time of our frame is done
    };
}