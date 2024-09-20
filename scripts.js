document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.setProperty('--bar-width', percentage + '%');
    });

    // Smooth scrolling for navigation
    const anchors = document.querySelectorAll('nav a');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ensure the target ID is valid
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.warn(`No element found for ID ${targetId}`);
                }
            }
        });
    });
});

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    // Get the tooltip text and score
    const tooltipText = skill.querySelector('.skill-image').dataset.tooltip;
    const scoreText = skill.querySelector('.skill-image').dataset.score;

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip'; // Updated class name
    tooltip.innerHTML = `${tooltipText}<br>Proficiencia: ${scoreText}`; // Use <br> for line break
    skill.appendChild(tooltip); // Append tooltip to the skill box

    skill.addEventListener('mouseover', () => {
        const randomRotation = Math.random() * 10 - 5; // Random number between -5 and 5
        skill.style.transform = `translateY(-5px) rotate(${randomRotation}deg)`;
    });

    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'translateY(0) rotate(0)';
    });
});


/*Project list*/
let currentIndex = 0;

function navigate(direction) {
    const projects = document.querySelectorAll('.project');
    const totalProjects = projects.length;

    // Update current index
    currentIndex += direction;

    // Loop around if out of bounds
    if (currentIndex < 0) {
        currentIndex = totalProjects - 1; // Go to last project
    } else if (currentIndex >= totalProjects) {
        currentIndex = 0; // Go to first project
    }

    // Update transform property to show the current project
    const container = document.querySelector('.project-container');
    const offset = currentIndex * -100; // Move left by 100% for each index
    container.style.transform = `translateX(${offset}%)`;
}
