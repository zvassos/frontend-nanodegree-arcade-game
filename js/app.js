// Enemies our player must avoid
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Draw the enemy on the screen, required method for game
class Enemy {
    constructor(x, y, speed) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed + Math.floor(Math.random() * 250);
    }

    update(dt) {
        this.x = this.x + this.speed * dt;

        if (this.x > 505) {
            this.x = -150;
            this.speed = 100 + Math.floor(Math.random() * 250);
        }

        if (player.x < this.x + 70 && player.x + 70 > this.x && player.y < this.y + 50 && player.y + 50 > this.y) {
            const youLost = document.getElementById("youLost");
            youLost.classList.add("visible");
            setTimeout(function() {
                player.x = 200;
                player.y = 400;
                youLost.classList.remove("visible");
            }, 1000);
            
        }



    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}

const enemyOne = new Enemy(50, 60, 100);
const enemyTwo = new Enemy(-100, 140, 100);
const enemyThree = new Enemy(-200, 220, 100);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.sprite = 'images/char-cat-girl.png';
        this.x = x;
        this.y = y;
    }

    update() {}

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(pressedKey) {

        if (pressedKey == 'left' && this.x > 0) {
            this.x -= 102;
        }
        if (pressedKey == 'right' && this.x < 305) {
            this.x += 102;
        }
        if (pressedKey == 'up' && this.y > 0) {
            this.y -= 83;
        }
        if (pressedKey == 'down' && this.y < 355) {
            this.y += 83;
        }

        if (this.y < 60) {
            const youWon = document.getElementById("youWon");
            youWon.classList.add("visible");
            setTimeout(function() {
                player.x = 200;
                player.y = 400;
                youWon.classList.remove("visible");
            }, 2000);
        }


    }
}

const player = new Player(200, 400);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [enemyOne, enemyTwo, enemyThree];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});