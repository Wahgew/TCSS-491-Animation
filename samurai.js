class Samurai {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/running.png"), 2, 0, 68,90, 8, 0.1);
        this.x = 0;
        this.y = 0;
        this.speed = 200;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1920) {
            this.x = 0;
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x,this.y);
    };
}