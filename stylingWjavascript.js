// Store original styles for reset functionality
const originalStyles = {};

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Store original styles
    document.querySelectorAll('.box').forEach(box => {
        originalStyles[box.id] = {
            backgroundColor: getComputedStyle(box).backgroundColor,
            transform: getComputedStyle(box).transform,
            borderRadius: getComputedStyle(box).borderRadius,
            fontSize: getComputedStyle(box).fontSize,
            color: getComputedStyle(box).color
        };
    });

    // Box 1: Click to change color
    const box1 = document.getElementById('box1');
    if (box1) {
        box1.addEventListener('click', function() {
            const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            this.style.backgroundColor = randomColor;
        });
    }

    // Box 2: Hover to transform
    const box2 = document.getElementById('box2');
    if(box2){
        box2.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        box2.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Box 3: Double click to change shape
    const box3 = document.getElementById('box3');
    if (box3){
        let isCircle = false;
        box3.addEventListener('dblclick', function() {
            isCircle = !isCircle;
            this.style.borderRadius = isCircle ? '50%' : '8px';
        });
    }

    // Box 4: Click to animate
    const box4 = document.getElementById('box4');
    if(box4){
        box4.addEventListener('click', function() {
            const element = this;
            requestAnimationFrame(() => {
                element.style.animation = 'none';
                element.offsetHeight;
                element.style.animation = 'pulse 1s ease infinite';
            });
        });
    }

    // Reset button
    const resetButton = document.getElementById('resetButton');
    if(resetButton){
        resetButton.addEventListener('click', () => {
            document.querySelectorAll('.box').forEach(box => {
                const originalStyle = originalStyles[box.id];
                if (originalStyle) {
                    box.style.backgroundColor = originalStyle.backgroundColor;
                    box.style.transform = originalStyle.transform;
                    box.style.borderRadius = originalStyle.borderRadius;
                    box.style.fontSize = originalStyle.fontSize;
                    box.style.color = originalStyle.color;
                }
            });
        });
    }
});