import BookApi from './services';
 import Pagination from 'tui-pagination';
const bookApi = new BookApi();
const books=document.querySelector(".shopping-list-books");
const categories = bookApi.getBookDetail("643282b1e85766588626a087");

import amazonImg from '../images/marketplaces/amazon.png';
import appleBooksImg from '../images/marketplaces/apple-books.png';
import bookshopImg from '../images/marketplaces/bookspop.png';
import Trash from '../images/sprite.svg#icon-modal-close-btn-black';

function GetShop(c,Shopname){
    const link=c
    for (var element of c) {
        if (element.name==Shopname)
        return element.url;
      }
}
function MakeHTML({book_image="../images/logo.png",title,list_name,description,author,buy_links}){
    //console.log(c);
    const html= 
    `<li class="shopping-list-books-item" name="${title}">
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
        <a href="${GetShop(buy_links,"Amazon")}" class="shopping-list-books-item-amazon-svg shopping-list-amazon">
                <img width="32px" height="11px" src="${amazonImg}" loading="lazy" alt="amazon"></img>
        </a>
        <a href="${GetShop(buy_links,"Bookshop")}" class="shopping-list-books-item-orange-book-svg">
                <img src="${appleBooksImg}" width="16px" height="16px" loading="lazy" alt="apple Book"></img>
        </a>
        <a href="${GetShop(buy_links,"IndieBound")}" class="shopping-list-books-item-black-book-svg">
                <img src="${bookshopImg}" width="16px" height="16px" loading="lazy" alt="book shop"></img>
        </a>
        </div>
        <button class="shopping-list-books-item-delete-svg-button" type="button">
    <svg height="16px" class="shopping-list-delete-svg" width="16px">
        <use href="${Trash}"/>
    </svg>
    </button>
</div>
</li>`
//console.log(Trash);
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

    books.addEventListener('click', event => {
        //event.preventDefault();
       // console.log(event.target.nodeName);
       const LI_of_book=event.target.closest('li').getAttribute("name")
        if(event.target.nodeName==="svg" || event.target.nodeName==="path"){
            console.log("Delete "+LI_of_book);
           // Make.removeByName(LI_of_book);
           // Make.Set_Plagination();
           // console.log(Make.list)
        }
        else
        console.log("Click on "+LI_of_book);
    })

})