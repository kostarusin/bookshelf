import array from './static-json-temporary/support_ukraine.json';

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
    if(offset>400){
      offset=400;
    }
    divEl.style.top=-offset+'px'
  });
  
  document.querySelector('.up-scroll').addEventListener('click',()=>{
    offset-= 100;
    if(offset=400){
      offset=400;
    }
    divEl.style.top=offset+'px'
  });
  
  
  
  