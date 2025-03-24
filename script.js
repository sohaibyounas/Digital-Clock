// Use const for variables that won't be reassigned
const clockElement = document.querySelector(".clock-data h3");

// Function to update the digital clock
function digitalClock() {
    const now = new Date(); // Get current time
    
    // Use destructuring and let for variables that need to be modified
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Determine AM/PM using template literal condition
    const amPm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12 || 12; // Simplified: if hours % 12 is 0, use 12
    
    // Use padStart for adding leading zeros (ES6+)
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    
    // Use template literals for string construction
    clockElement.innerHTML = `${h} : ${m} : ${s} ${amPm}`;
}

// Start clock immediately and set interval
digitalClock(); // Run once immediately
setInterval(digitalClock, 1000); // Run every second
