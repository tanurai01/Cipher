// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Mood selection buttons
    const moodButtons = document.querySelectorAll('.mood-button');
    let selectedMood = '';

    moodButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Remove active class from all buttons
            moodButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            event.target.classList.add('active');
            // Store the selected mood
            selectedMood = event.target.textContent;
            console.log('Selected mood:', selectedMood);
            // Optionally, display a confirmation or next step
        });
    });

    // Handle Stress Assessment Form Submission
    const form = document.getElementById('assessment-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission (since there are no form actions)
        // Collect form data (if applicable)
        console.log("Stress assessment submitted.");
        // Simulate AI recommendations
        displayAIRecommendations();
    });

    // Function to display AI-driven recommendations
    function displayAIRecommendations() {
        const recommendationsDiv = document.getElementById('ai-recommendations');
        recommendationsDiv.innerHTML = `
            <ul>
                <li>Based on your mood (${selectedMood}), we recommend a 10-minute meditation session.</li>
                <li>Take short walks to reduce stress and improve focus.</li>
                <li>Try the 4-7-8 breathing technique to relax yourself.</li>
            </ul>
        `;
    }

    // Mood Chart (Optional - requires a library like Chart.js)
    const ctx = document.getElementById('mood-chart').getContext('2d');
    const moodChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'], // Placeholder labels
            datasets: [{
                label: 'Mood Over Time',
                data: [3, 4, 2, 5, 3], // Placeholder data
                borderColor: '#3498db',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});