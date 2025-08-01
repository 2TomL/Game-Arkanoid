// Taunt System for Arkanoid Game
export class TauntSystem {
    constructor() {
        this.taunts = [
            "Missed again, champ! 🎯",
            "You call that aim? 😏",
            "My grandma hits harder! 👵",
            "Is this your first time? 🤔",
            "Even a blindfolded turtle could do better! 🐢",
            "Ouch! That had to hurt... your pride! 😂",
            "Maybe try aiming next time? 🎪",
            "That ball's got a mind of its own! 🤪",
            "Physics called - they want their laws back! 🧪",
            "Did you mean to do that? 🙃",
            "The ball is lava! 🔥",
            "Houston, we have a problem! 🚀",
            "Task failed successfully! ✅",
            "Legends never miss... oh wait! 😅",
            "That's what we call 'creative aiming'! 🎨",
            "The paddle is not a suggestion! 🏓",
            "Gravity: 1, Player: 0! ⚡",
            "Maybe the real treasure was the misses we made along the way! 💎"
        ];
        this.lastTauntTime = 0;
        this.tauntCooldown = 1500; // 1.5 seconds between taunts (was 2000)
        this.isGameActive = false;
        this.missCount = 0;
        this.bubbles = {
            left: document.getElementById('taunt-left'),
            right: document.getElementById('taunt-right'),
            bottom: document.getElementById('taunt-bottom')
        };
    }
    startGame() {
        this.isGameActive = true;
        this.missCount = 0;
        this.lastTauntTime = Date.now();
    }
    stopGame() {
        this.isGameActive = false;
        this.hideAllTaunts();
    }
    onBallMiss() {
        if (!this.isGameActive)
            return;
        this.missCount++;
        const now = Date.now();
        // Show taunt with some probability and cooldown
        if (now - this.lastTauntTime > this.tauntCooldown && Math.random() < 0.7) {
            this.showRandomTaunt();
            this.lastTauntTime = now;
        }
    }
    onBrickMiss() {
        if (!this.isGameActive)
            return;
        const now = Date.now();
        // Occasional taunt on missing bricks (lower probability)
        if (now - this.lastTauntTime > this.tauntCooldown && Math.random() < 0.2) {
            this.showRandomTaunt();
            this.lastTauntTime = now;
        }
    }
    showRandomTaunt() {
        const taunt = this.taunts[Math.floor(Math.random() * this.taunts.length)];
        const positions = ['left', 'right', 'bottom'];
        const position = positions[Math.floor(Math.random() * positions.length)];
        this.showTaunt(position, taunt);
    }
    showTaunt(position, text) {
        const bubble = this.bubbles[position];
        if (!bubble)
            return;
        // Hide all other bubbles first
        this.hideAllTaunts();
        // Set the text
        const textElement = bubble.querySelector('.taunt-text');
        if (textElement) {
            textElement.textContent = text;
        }
        // Show the bubble
        bubble.classList.remove('hidden');
        setTimeout(() => {
            bubble.classList.add('show');
        }, 10);
        // Auto-hide after 26 seconds (was 18)
        setTimeout(() => {
            this.hideTaunt(position);
        }, 26000);
    }
    hideTaunt(position) {
        const bubble = this.bubbles[position];
        if (!bubble)
            return;
        bubble.classList.remove('show');
        setTimeout(() => {
            bubble.classList.add('hidden');
        }, 500); // Increased fade out time for smoother transition
    }
    hideAllTaunts() {
        const positions = ['left', 'right', 'bottom'];
        positions.forEach(position => {
            this.hideTaunt(position);
        });
    }
    // Special taunts for specific events
    showWelcomeTaunt() {
        setTimeout(() => {
            this.showTaunt('right', "Ready to show me what you've got? 😎");
        }, 1000);
    }
    showGameOverTaunt(score) {
        if (score === 0) {
            this.showTaunt('bottom', "Well... that was something! 😬");
        }
        else if (score < 5) {
            this.showTaunt('left', "Not bad for a beginner! 👍");
        }
        else if (score < 15) {
            this.showTaunt('right', "Getting warmer! Keep it up! 🔥");
        }
        else {
            this.showTaunt('bottom', "Impressive! You've got skills! 🏆");
        }
    }
    showVictoryTaunt() {
        this.showTaunt('bottom', "Wow! You actually did it! 🎉🏆");
    }
}
