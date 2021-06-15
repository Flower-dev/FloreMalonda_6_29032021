// ------------------ Components -------------------------

import TopBar from './components/TopBar.js';
import NavHome from './components/NavHome.js';
import Avatar from './components/Avatar.js';
// import ButtonTop from './components/ButtonTop.js';

const filterByTags = function (tag) {
  console.log('filterByTags', tag, photographers);
  const photographersFilter = photographers.filter((photographer) => {
    return photographer.tags.includes(tag)
  })
  console.log(photographersFilter);
  div.innerHTML = '';
  photographersFilter.map(function(photographer) {
    const avatar = new Avatar(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline,photographer.price, photographer.tags, photographer.id);
    let divAvatar = createNode('div');
    divAvatar.innerHTML = avatar.render();
    div.append(divAvatar);
  })
}

const topbar = new TopBar();
const navhome = new NavHome(filterByTags);
// const buttontop = new ButtonTop();

// ------------- DOM -----------------------------

function createNode(element) {
  return document.createElement(element);
}


// -----------------------------------------------------

document.querySelector(`#app`).innerHTML = `<div class="header">${topbar.render()} ${navhome.render()}</div>`

const div = document.querySelector('#photographers');

var photographers = [];

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  photographers = data.photographers;
  
  return data.photographers.map(function(photographer) {
    const avatar = new Avatar(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline,photographer.price, photographer.tags, photographer.id);
    let divAvatar = createNode('div');
    divAvatar.innerHTML = avatar.render();
    div.append(divAvatar); 
  })

})
.catch(function(error) {
  console.log(error);
});






