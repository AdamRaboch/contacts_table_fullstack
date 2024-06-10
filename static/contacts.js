

// Get all delete buttons
const deleteButtons = document.querySelectorAll('button.Delete');
console.log(deleteButtons); // Log the deleteButtons variable to the console

// Add event listener to each delete button
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the parent row of the button
        const row = button.closest('tr');
        // Remove the row from the table
        row.remove();
    });
});

// Get reference to the "Add Empty Row" button
const addEmptyRowButton = document.querySelector('button#addEmptyRow');

// Add event listener to the "Add Empty Row" button
addEmptyRowButton.addEventListener('click', () => {
    // Create a new row element
    const newRow = document.createElement('tr');

    // Define the HTML content of the new row (empty cells and a delete button)
    newRow.innerHTML = `
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <button class="Delete">Delete</button>
            <button class="Edit">Edit</button>
        </td>
    `;

    // Append the new row to the table body
    const tableBody = document.querySelector('tbody');
    tableBody.appendChild(newRow);

    // Optionally, you can add functionality to the delete button in the new row
    const newDeleteButton = newRow.querySelector('button.Delete');
    newDeleteButton.addEventListener('click', () => {
        // Get the parent row of the button
        const row = newDeleteButton.closest('tr');
        // Remove the row from the table
        row.remove();
    });
});

// Get reference to the "Add Daenerys" button using its id
const addDaenerysButton = document.getElementById('addDaenerys');

// Add event listener to the "Add Daenerys" button
addDaenerysButton.addEventListener('click', () => {
    // Create a new row element
    const newRow = document.createElement('tr');

    // Define the HTML content of the new row with Daenerys's information
    newRow.innerHTML = `
        <td>4</td>
        <td>Daenerys Targaryen</td>
        <td>34257383903</td>
        <td>BigD@dragonstone.com</td>
        <td> <img src="static/Daenerys.jpg" width="100" height="100" alt="GoT"> </td>
        <td>
            <button class="Delete">Delete</button>
            <button class="Edit">Edit</button>
        </td>
    `;

    // Append the new row to the table body
    const tableBody = document.querySelector('tbody');
    tableBody.appendChild(newRow);

    // Optionally, you can add functionality to the delete button in the new row
    const newDeleteButton = newRow.querySelector('button.Delete');
    newDeleteButton.addEventListener('click', () => {
        // Get the parent row of the button
        const row = newDeleteButton.closest('tr');
        // Remove the row from the table
        row.remove();
    });
});
