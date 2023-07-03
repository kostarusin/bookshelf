import array from './static-json-temporary/support_ukraine.json';
// let array=[{
//   "title": "Save the Children",
//   "url": "https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/save-the-children.png?raw=true"
// },
// {
//   "title": "Project HOPE",
//   "url": "https://www.projecthope.org/country/ukraine/",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/hope.png?raw=true"
// },
// {
//   "title": "International Medical Corps",
//   "url": "https://internationalmedicalcorps.org/country/ukraine/",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/international-medical-corps.png?raw=true"
// },
// {
//   "title": "RAZOM",
//   "url": "https://www.razomforukraine.org/",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/razom.png?raw=true"
// },
// {
//   "title": "UNITED24",
//   "url": "https://u24.gov.ua/uk",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/united24.png?raw=true"
// },
// {
//   "title": "Medicins Sans Frontieres",
//   "url": "https://www.msf.org/ukraine",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/medicins-sans-frontieres.png?raw=true"
// },
// {
//   "title": "Action against hunger",
//   "url": "https://www.actionagainsthunger.org/location/europe/ukraine/",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/action-against-hunger.png?raw=true"
// },
// {
//   "title": "World vision",
//   "url": "https://www.wvi.org/emergencies/ukraine",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/world-vision.png?raw=true"
// },
// {
//   "title": "Serhiy Prytula Charity Foundation",
//   "url": "https://prytulafoundation.org/en",
//   "img": "https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/sergiy-prytula.png?raw=true"
// }
// ]

  const divEl =document.querySelector('.slider_line');
  const olEl=document.querySelector('.ol_support');
  
  function markUpSupportUkraine(){
    let list = array.map(item => {
    let listItem = document.createElement('li');
    listItem.className = 'list';
    listItem.innerHTML = `
      <a class="support_link" href="${item.url}">
        <img class="image" src="${item.img}" alt="${item.title}
         width="149px" height="55px"/>
      </a>
    `;
    return listItem;
  });
  
  list.forEach(item=>{
  olEl.appendChild(item)
  });
  
  };
  markUpSupportUkraine();
  let offset=0;
document.querySelector('.down-scroll').addEventListener('click',()=>{
    offset+= 100;
    if(offset>=400){
      offset=400;
    }
    divEl.style.top=-offset+'px'
  });
  
  
  
  
  