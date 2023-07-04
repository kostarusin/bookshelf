import BookApi from './services';
 import Pagination from 'tui-pagination';
const bookApi = new BookApi();
const books=document.querySelector(".shopping-list-books");
const categories = bookApi.getBookDetail("643282b1e85766588626a087");

import amazonImg from '../images/marketplaces/amazon.png';
import appleBooksImg from '../images/marketplaces/apple-books.png';
import bookshopImg from '../images/marketplaces/bookspop.png';

function GetShop(c,Shopname){
    const link=c
    for (element of c) {
        if (element.name==Shopname)
        return element.url;
      }
}
function MakeHTML({book_image="../images/logo.png",title,list_name,description,author,buy_links}){
    //console.log(c);
    const html= 
    `<li class="shopping-list-books-item">
    <div class="shopping-list-books-item-img-div">
    <img src="${book_image}" alt="${title}" class="shopping-list-books-item-img">
    </div>
    <div class="shopping-list-books-item-info">
    <div class="shopping-list-books-item-basic-info">
    <h2 class="shopping-list-books-item-header">${title}</h2>
    <p class="shopping-list-books-item-category">${list_name}</p>
    </div>
    <div class="shopping-list-books-item-description-stop-block">
    <p class="shopping-list-books-item-description">${description}</p>
    </div>
    <p class="shopping-list-books-item-author">${author}</p>
    <div class="shopping-list-books-item-shops">
        <a href="${GetShop(buy_links,"Amazon")}" class="shopping-list-books-item-amazon-svg">
                <img width="32px" height="11px" src="${amazonImg}" loading="lazy" alt="amazon"></img>
        </a>
        <a href="${GetShop(buy_links,"Bookshop")}" class="shopping-list-books-item-orange-book-svg">
                <img src="${appleBooksImg}" width="16px" height="16px" loading="lazy" alt="apple Book"></img>
        </a>
        <a href="${GetShop(buy_links,"IndieBound")}" class="shopping-list-books-item-black-book-svg">
                <img src="${bookshopImg}" width="16px" height="16px" loading="lazy" alt="book shop"></img>
        </a>
        </div>
        <a class="shopping-list-books-item-delete-svg-button">
    <svg height="16px" id="Layer_1" class="shopping-list-delete-svg" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/></svg>
        <use href=""></use>
    </svg>
    </a>
</div>
</li>`
return html;
}

export default class ShoppingListMake{ 
    constructor(all){
        this.list=all;
        this.page=1;
        this.count_of_books=4; // в других 3 в мобильном 4.
        this.pagination = new Pagination('pagination', {
            // totalItems: y,
             visiblePages: 2,
             itemsPerPage: 2,
             template: {
                 page: '<a href="#" class="tui-page-btn">{{page}}</a>',
                 currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
                 moveButton:
                     '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
                         '<span class="tui-ico-{{type}}">{{type}}</span>' +
                     '</a>',
                 disabledMoveButton:
                     '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
                         '<span class="tui-ico-{{type}}">{{type}}</span>' +
                     '</span>',
                 moreButton:
                     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
                         '<span class="tui-ico-ellip">...</span>' +
                     '</a>'
             }
             
         });
        
       

    }

    Set_Plagination(){

        this.pagination.totalItems=parseInt((Math.ceil(this.list.length/this.count_of_books)));
        // console.log("It work"+ this.pagination.totalItems);

    }
    clearAll() {
        books.innerHTML = '';
      }

    


    Make(){
        const Items= this.list
        .slice(this.count_of_books*(this.page-1),this.count_of_books*this.page)
        .map(MakeHTML)
        .join('');
        books.insertAdjacentHTML('beforeend',Items);
    }
    removeByName(name){
        this.list=this.list.filter((value, index, arr) => {
            if (value.title === name)
            {
                arr.splice(index, 1);
                return true;
            }
                return false;  
        });
    }
    MakeToPage(index){
        this.page=index;
        const Items= this.list
        .slice(this.count_of_books*(this.page-1),this.count_of_books*this.page)
        .map(MakeHTML)
        .join('');
        books.insertAdjacentHTML('beforeend',Items);
    }
}





var i;
categories.then(getd=>i=getd).finally(()=>{

    const Make= new ShoppingListMake([i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i]);
    // Make.clearAll();
    // Make.SetPaginationPages();
    Make.Set_Plagination();
    Make.pagination.on('afterMove', function(eventData) {
       // alert('The current page is ' + eventData.page);
       Make.clearAll();
        Make.MakeToPage(eventData.page);
        // console.log("DOIR")
        
    });
    Make.MakeToPage(1);
})