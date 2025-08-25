document.addEventListener('DOMContentLoaded', () => {
    const emojiDisplay = document.getElementById('emoji-display');
    const generateBtn = document.getElementById('generate-btn');

    // Array of emojis
    const emojis = [
        // Smileys and emotions
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣',
        '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰',
        '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜',
        '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏',
        // Animals
        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
        '🐨', '🦁', '🐯', '🐮', '🐷', '🐸', '🐒', '🦇',
        // Food and drinks
        '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓',
        '🍕', '🌮', '🍔', '🍟', '🍖', '🍜', '🍱', '🍺',
        // Activities and objects
        '⚽', '🏀', '🎾', '🎮', '🎸', '📱', '💻', '⌚',
        '🎨', '🎭', '🎪', '🎢', '🌈', '⭐', '🌟', '💫',
        // Hearts and symbols
        '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍',
        '✨', '💫', '☀️', '🌙', '⚡', '🌈', '🔥', '💯'
    ];

    // Function to generate random emoji
    function generateRandomEmoji() {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        emojiDisplay.textContent = emojis[randomIndex];
    }

    // Add click event listener to the button
    generateBtn.addEventListener('click', generateRandomEmoji);
});
