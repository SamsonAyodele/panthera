let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";


  let para = document.getElementById('para');
   let image = document.getElementById('image');

  async function getCommits(){
    let response = await fetch(url);

    let commits = await response.json();

    console.log('commits', commits);

    para.innerHTML = commits[1].author.login;

    image.setAttribute('src', commits[1].author.avatar_url)

  }


  getCommits()
