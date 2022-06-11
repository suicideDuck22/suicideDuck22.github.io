function changeProjectLinks(){
    for(let li of projectsNames.children){
        const project = li.getAttribute('class');
        li.children[0].href = `https://github.com/suicideDuck22/${project}`
    }
}

changeProjectLinks()

const userSocialMedias = {
    github: 'suicideDuck22',
    instagram: 'renas.js/',
    facebook: 'profile.php?id=100010200602377'
}

function changeSocialLinks(){
    for(let li of socialLink.children){
        const social = li.getAttribute('class');
        li.children[0].href = `https://www.${social}.com/${userSocialMedias[social]}`
    }
}

changeSocialLinks()

window.addEventListener('scroll', () => {
    if(window.scrollY > 40){
        document.querySelector('header').style.position = 'fixed'
    } else {
        document.querySelector('header').style.position = 'static'
    }
})

const navigationHeight = document.querySelector('header').offsetHeight

document.documentElement.style.setProperty('--scroll-pading', `${navigationHeight - 1}px`)