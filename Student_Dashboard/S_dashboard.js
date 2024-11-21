// Function to toggle sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

// Initialize FullCalendar for events section
$(document).ready(function () {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Company A Recruitment Test',
                start: '2024-11-08',
            },
            {
                title: 'Resume Building Workshop',
                start: '2024-11-10',
            }
        ]
    });
});
