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
  const divEl =document.querySelector('.slider_line');
  const olEl=document.querySelector('.ol_support');
  
  function markUpSupportUkraine(){
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
  olEl.appendChild(item)
  });
  
  };
  markUpSupportUkraine();
  let offset=0;
  let down=document.querySelector('.down-scroll').addEventListener('click',function(){
    offset+= 100;
    if(offset>352){
      offset=0;
    }
    divEl.style.top=-offset+'px'
  });
  
  
  
  