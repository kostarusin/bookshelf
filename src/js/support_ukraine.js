import arrSupport from './static-json-temporary/support_ukraine.json';

 const divEl =document.querySelector('.slider_line');
  const olEl=document.querySelector('.ol_support');

  function markUpSupportUkraine(){
    let list = arrSupport.map(item => {
    let listItem = document.createElement('li');
    listItem.className = 'list';
    listItem.innerHTML = `
      <a class="support_link" target="_blank" href="${item.url}">
        <img class="image" src="${item.img}" alt="${item.title}"/>
      </a>`;
    return listItem;
  });
  list.forEach(item=>{
  olEl.appendChild(item)
  });
  
  };
  markUpSupportUkraine();
  
  let offset=0;
  document.querySelector('.scroll').addEventListener('click',()=>{
      offset+= 150;
      if(offset>300){
        offset=0;
       }
        divEl.style.top= -offset+'px';
       });
 
 