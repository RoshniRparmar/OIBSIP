function addTask() {
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();
    
    if (title === "" || description === "") {
        alert("Please fill out all fields.");
        return;
    }

    let table = document.getElementById("taskList");
    let row = table.insertRow();
    
    let titleCell = row.insertCell(0);
    let descCell = row.insertCell(1);
    let deleteCell = row.insertCell(2);

    titleCell.textContent = title;
    descCell.textContent = description;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        row.remove();
    };
    
    deleteCell.appendChild(deleteBtn);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}