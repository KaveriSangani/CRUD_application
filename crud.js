// Select elements
const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");

// Array to hold user data
let users = [];

// Function to render users in the table
function renderUsers() {
    userTable.innerHTML = ""; // Clear the table content
    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit" onclick="editUser(${index})">Edit</button>
                <button class="delete" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

// Function to handle form submission
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Add user to the array
    users.push({ name, email });

    // Render the updated table
    renderUsers();

    // Reset the form
    userForm.reset();
});

// Function to edit a user
function editUser(index) {
    const user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;

    // Remove the current user from the array
    deleteUser(index);
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1); // Remove user from array
    renderUsers(); // Re-render the table
}

// Initial render
renderUsers();






// 
