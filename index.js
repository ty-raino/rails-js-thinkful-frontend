document.addEventListener("DOMContentLoaded", () => {
    createForm()
    fetchUsers()
}) 

const BASE_URL = "http://localhost:3000"

// read - fetch users index

function fetchUsers() {
    fetch(`${BASE_URL}/users`)
    .then(resp => resp.json())
    .then(users => {
    //    where we do something with the fetched data

        for (const user of users) {
            let u = new User(user.id, user.username)
            u.renderUser();
        }
    })
}

// create - create a new user
// create form
// add event listener
// when form is submitted => fetch `post` to my back end
// do something with the returned obj

function createForm() {
    let usersForm = document.getElementById("users-form")

    usersForm.innerHTML +=
    `
    <form>
    Username: <input type="text" id="username">
    <input type="submit" value="Create User">
    </form>
    `

    usersForm.addEventListener("submit", userSubmit)
}

function userSubmit() {
    event.preventDefault();

    let username = document.getElementById("username").value
    
    let user = {
        username: username
    }

    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => {
        let u = new User(user.username)
        u.renderUser();
    })
}

function makePost() {

}




// function displayQuestions() {
    
// }


// function arrOfQuestions() {
//     // refresh: different set of questions
//     let questions = ["question 1", "question2"]
// }

// function numGenerator() {
//     // generate a number thats within the array of questions length
// }



// delete - delete





// question 1: resp 1
// question 2: resp 2
// question 3: resp 3

// array that has questions in it (lives in frontend) / generate different questions