function changeProjectLinks(){
    for(let li of projects.children){
        const project = li.getAttribute('class');
        li.children[0].href = `https://github.com/suicideDuck22/${project}`
    }
}

changeProjectLinks()