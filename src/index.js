import './js/refs';
import './js/loader';
import './js/render';
import './js/services';
import './js/storage';
let array = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
]
const bodyEl=document.body;
const divEl =document.createElement('div');
const headerEl=document.createElement('h2');
headerEl.className='header_support';
divEl.insertAdjacentElement('afterbegin',headerEl);
headerEl.textContent='Support Ukraine';
headerEl.svg=''
const ulEl=document.createElement('ol');

ulEl.className='ul_support';
divEl.className='container_support';
let list = array.map(item => {
  let listItem = document.createElement('li');
  listItem.className = 'list';
  listItem.innerHTML = `
    <a class="support_link" href="${item.url}">${item.title}
      <img class="image" src="#" alt="#"/>
    </a>
  `;
  
  return listItem;
});
list.forEach(item=>{
ulEl.appendChild(item)
});
divEl.appendChild(ulEl);
bodyEl.appendChild(divEl);
// array.forEach(item=>{
//   window.open (`${item.url}`,`${item.title}`, "popup");
// })