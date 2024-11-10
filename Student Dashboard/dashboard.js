// Show Sections Based on User Click
function showSection(section) {
    document.querySelectorAll('.section').forEach(function (el) {
        el.style.display = 'none';
    });

    document.getElementById(section).style.display = 'block';
}

// Display Current Date in the Format "Sunday, November 10, 2024"
function formatCurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = formattedDate;

    // Set the calendar title to the current month and year (e.g., "November 2024")
    const monthTitle = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    document.getElementById('calendar-title').textContent = monthTitle;
}

// Initialize Simple Calendar for the events section
$(document).ready(function () {
    // Display formatted current date (e.g., Sunday, November 10, 2024)
    formatCurrentDate();

    // Initialize FullCalendar
    $('#calendar').fullCalendar({
        header: {
            left: '',
            center: 'title',
            right: ''
        },
        events: [
            {
                title: 'Assignment Due: ML Project',
                start: '2024-11-10',
                description: 'Submit your machine learning project before midnight.'
            },
            {
                title: 'Class Test: AI Algorithms',
                start: '2024-11-12',
                description: 'Prepare for the AI Algorithms class test.'
            },
            {
                title: 'Class Project Deadline',
                start: '2024-11-14',
                description: 'Submit your group project for the Data Structures class.'
            }
        ]
    });
});
