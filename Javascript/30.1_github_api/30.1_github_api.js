const url = "https://api.github.com/users/";

const users = [];

const usersList = document.querySelector(".users");
const [searchTxt, searchBtn] = document.querySelector(".search").children;
const msgError = document.querySelector(".msgError");


const getUserData = async (username) => {
    const req =await fetch (`${url}${username}`);
    try {
        if (req.status === 404) {
            throw new Error(`User ${username} Not found`);
        }
        const data = await req.json();
        return {
            name : data.name,
            avatar: data.avatar_url,
            url: data.html_url,
            publicRepos: data.public_repos,
        };
    } catch (err) {
        return err;
    }
};

const renderData = (data) => {
    const card = document.createElement("a");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const repo = document.createElement("span");

    card.classList.add("card");
    card.setAttribute("href", data.url);
    img.setAttribute("src", data.avatar);
    h3.textContent = `${data.name}`;
    repo.textContent = `${'Repo:'} ${data.publicRepos}`;
    card.append(img, h3, repo);
    return card;
};

const searchUser = async () => {
    msgError.textContent = "";
    const username = searchTxt.value;
    searchTxt.value = "";
    if (users.includes(username)) {
        return msgError.textContent = `User ${username} already exists`;
    } else {
        users.push(username);
    }
    try {
        const userData = await getUserData(username);
        if (userData instanceof Error) {
            throw userData;
        }
        const userCard = renderData(userData);
        usersList.append(userCard);
    } catch (err) {
        msgError.textContent = err;
    }
    searchTxt.focus();
};

function pushData() {
    searchBtn.addEventListener("click", searchUser);
    searchTxt.addEventListener("keydown",(e) => e.key === "Enter" && searchUser());
}

pushData();