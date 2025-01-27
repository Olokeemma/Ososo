// Function to display age group based on gender selection
function displayAgeGroupOptions() {
    const gender = document.getElementById('gender').value;
    const ageGroup = document.getElementById('age-group');

    if (gender === 'Male' || gender === 'Female') {
        ageGroup.innerHTML = `
            <option value="Under 18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45+">45+</option>
        `;
    } else {
        ageGroup.innerHTML = `
            <option value="Under 18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45+">45+</option>
        `;
    }
}
