
//get Node element
const listRepos = document.querySelector('.list-repos');
// get info about repo
function getRepoInfo (url){
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //render repos
            render(data)
            //amount repos
            amountRepos(data)
            //last commit
            // dateLastCommit(data)
        })
        .catch(e => console.log(e))
}
getRepoInfo('https://api.github.com/users/HromadskyiMykola/repos');
// Create html
function createHtml (data) {
    const HTML = `<li class="repo">
                       <div class="name-repo"><a href="${data.html_url}" class="style-url"><i class="fa-brands fa-git-alt"></i></a>${data.name}</div>
                       <div class="date-last-commit hide">${data.updated_at.replace(/[TZ]/g, ' ')}</div>
                  </li>`
    listRepos.insertAdjacentHTML('beforeend',HTML)
}
// render
function render (arr) {
    arr.forEach(e=>createHtml(e))
    const repo = document.querySelectorAll('.repo');
    repo.forEach(e => e.addEventListener('click',expand));
}

// expand
function expand (event) {
    const parentNode = event.target.closest('li')
    const blockTime = parentNode.querySelector('.date-last-commit')
    blockTime.classList.toggle('hide')
}

//amount repos
function amountRepos (arr) {
    const block = document.querySelector('.amount-repos');
    block.innerHTML =`${arr.length}`
}

// last commit
// function dateLastCommit (arr) {
//     let arrDateLastCommit = arr.map(e => e.updated_at)
//     arrDateLastCommit = arrDateLastCommit.sort((a,b)=> {
//         if (a > b){
//             return 1;
//         }
//         if(a < b){
//             return -1;
//         }
//         return 0;
//     })
//     const dateLastCommit = arrDateLastCommit.at(-1)
//     const block = document.querySelector('.date-last-commit');
//     block.innerHTML =` ${dateLastCommit.replace(/[TZ]/g, ' ')}`
// }
//get info about account

function getInfoAcc (url){
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            getName(data)
            getLink(data)
            getCreateGit(data)
            getLastUpdate(data)
            getAvatar(data)
        })
        .catch(e => console.log(e))
}

getInfoAcc('https://api.github.com/users/HromadskyiMykola')

function getName (data) {
    const block = document.querySelector('#name')
    block.innerHTML = data.name
}
function  getLink (data) {
    const block = document.querySelector('.git-page-url')
    block.setAttribute('href', data.html_url)
}
function getCreateGit (data) {
    const block = document.querySelector('#date-create-git')
    block.innerHTML = data.created_at.replace(/[TZ]/g, ' ')
}
function getLastUpdate (data) {
    const block = document.querySelector('.date-last-commit');
    block.innerHTML =` ${data.updated_at.replace(/[TZ]/g, ' ')}`
}
function getAvatar (data){
    const block = document.querySelector('.img-profile');
    block.setAttribute('src', data.avatar_url)
}