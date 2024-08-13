async function get_projects() {
    try {
        const response = await fetch('./ect/projecten.json'); 
        const projecten = await response.json();
 
        console.log(`${JSON.stringify(projecten)}`);
 
        make_article(projecten)
 
    } catch (error) {
        const err = document.querySelector("#project-content")
        const txt = document.createElement('p');
 
        txt.textContent = error;
        err.appendChild(txt);
 
        console.log(error);
    }
  }
 
  function make_article(obj) {
    const div = document.querySelector("#project-content");
    const projecten = obj.projecten;
    console.log(projecten);
 
    for (const project of projecten) {
        console.log(project);
        const art = document.createElement("article");
        art.id = "project";
        const title = document.createElement('h3');
        const thumb = document.createElement('img');
        const languages = document.createElement('span');
        const text = document.createElement('span');
        const linktxt = document.createElement('b');
        const url = document.createElement('a');
 
        title.innerHTML = project.naam;
        thumb.innerHTML = project.thumbnail;
        thumb.src = project.thumbnail;
        languages.innerHTML = "<b>Talen gebruikt: </b>" + project.talen + "<br/><br/>";
        text.innerHTML = project.tekst + '<br/><br/>';
        linktxt.innerHTML = "Link: "
        url.href = project.url;
        url.target = "_blank";
 
        if (project.naam === 'Brews Clues') {
            url.innerHTML = '<i class="fa-brands fa-itch-io"></i>' + " itch.io" + '<br/><br/>';
        } else {
            url.innerHTML = '<i class="fa-brands fa-github"></i>' + " github" + '<br/><br/>';
        }
 
        art.appendChild(title);
        art.appendChild(thumb);
        art.appendChild(languages);
        art.appendChild(text);
        art.appendChild(linktxt);
        art.appendChild(url);
 
        div.appendChild(art);
    }
  }
 
  document.addEventListener('DOMContentLoaded', get_projects);