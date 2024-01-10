let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";


  let para = document.getElementById('para');
  //  let image = document.getElementById('image');

  let root = document.getElementById("root")

  async function getCommits(){
    let response = await fetch(url);

    let commits = await response.json();

    commits.length

    console.log('commits', commits);

    // para.innerHTML = commits[1].author.login;

    // image.setAttribute('src', commits[1].author.avatar_url)

    let content = commits.map((item) => {
      return `<div class="content"> 
                  <p id="para">${item.author.login}</p>
                   <img src=${item.author.avatar_url} alt="pp" class="image">
                   <div class="link"><a href=${item.author.html_url} target="_blank">GitHub Profile</a></div>
              </div>`
    }).join('')

    root.innerHTML = content;

  }


  getCommits()
