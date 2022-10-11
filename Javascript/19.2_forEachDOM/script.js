const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
];


let ol = document.createElement("ol"); // create an ordered list
document.body.appendChild(ol); // add the list to the body
users.forEach((user) => { 
    let li = document.createElement("li");   // create li element
    li.innerHTML = `${user.firstName} ${user.lastName}`;  // add user and last name to li element
    li.setAttribute("data-id", `${user.id}`);  // add id to li element 
    ol.style.listStyleType = "none"; // remove bullets from list
    ol.appendChild(li); // add li element to ol element
});


