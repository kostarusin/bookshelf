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
  document.querySelector('.scroll').addEventListener('click',()=>{
      offset+= 100;
      //document.querySelector('.scroll-up').classList.remove("visually-hidden") 
      if(offset>350){
        offset=0;
       // document.querySelector('.scroll').classList.add("visually-hidden")
       // document.querySelector('.scroll-up').classList.remove("visually-hidden") 
      }
        divEl.style.top=-offset+'px'
    });
    
    // document.querySelector('.scroll-up').addEventListener('click',()=>{
    //   offset-= 100;
    //   document.querySelector('.scroll').classList.remove("visually-hidden") 
  
    // if(offset<0 ){   
    //   offset=0; 
       //document.querySelector('.scroll-up').classList.add("visually-hidden");
    //document.querySelector('.scroll-up').classList.add("visually-hidden"); 
    //document.querySelector('.scroll').classList.remove("visually-hidden");
  // }
  //    divEl.style.top=-offset+'px';
  //     });
    
  
  