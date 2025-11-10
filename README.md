# Rock Paper Scissors – JavaScript Game

A simple, interactive Rock Paper Scissors game built using HTML, CSS, and JavaScript.
It includes a countdown timer, automatic computer move, and confetti celebration for wins.

# Features

⏱️ Countdown Timer: Player has 3 seconds to make a move.

🤖 Computer AI: Randomly chooses Rock, Paper, or Scissors after “thinking” animation.

🎉 Confetti Celebration: Colorful animation when you win!

🔁 Reset Option: Start a fresh round anytime.

🖼️ Animated Computer Choice: Computer cycles through images before revealing its final move.

# Game Logic

When the round starts, you have 3 seconds to click:

🪨 Rock

📄 Paper

✂️ Scissors

If you don’t choose in time, you lose your turn (“⏰ Time’s up!”).

The computer “thinks” and randomly selects a move.

The winner is decided based on:

Rock > Scissors
Scissors > Paper
Paper > Rock

A confetti animation appears when you win.

# JavaScript Highlights

setTimeout() → Used for countdown and computer thinking delay.

clearTimeout() → Stops timers when the round resets.

requestAnimationFrame() → Drives confetti animation smoothly.

Recursive setTimeout() calls used for the countdown logic.

# Future Improvements

Add score tracking (Wins/Losses/Draws).

Add sound effects for clicks and results.

Make it mobile-responsive with CSS.

Animate the buttons when selected.
