import BookApi from './services';

const bookApi = new BookApi();
const books=document.querySelector(".shopping-list-books");
const categories = bookApi.getBookDetail("643282b1e85766588626a087");

categories.then(i=>{
     console.log(MakeHTML(i))
     books.insertAdjacentHTML('beforeend', MakeHTML(json_file));
    })



json_file=JSON.parse(`{
    "_id": "643282b1e85766588626a087",
    "list_name": "Business Books",
    "date": "2023-04-09T09:28:38.379Z",
    "age_group": "",
    "amazon_product_url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20",
    "article_chapter_link": "",
    "author": "James Clear",
    "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg",
    "book_image_width": 328,
    "book_image_height": 495,
    "book_review_link": "",
    "book_uri": "nyt://book/0398a355-c032-534e-a0af-647b06f0840d",
    "contributor": "by James Clear",
    "contributor_note": "",
    "created_date": "2023-04-05 23:10:12",
    "description": "David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.",
    "first_chapter_link": "",
    "price": "0.00",
    "primary_isbn10": "0735211299",
    "primary_isbn13": "9780735211292",
    "publisher": "Avery",
    "rank": 1,
    "rank_last_week": 0,
    "sunday_review_link": "",
    "title": "ATOMIC HABITS",
    "updated_date": "2023-04-05 23:10:12",
    "weeks_on_list": 0,
    "buy_links": [
        {
            "name": "Amazon",
            "url": "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20"
        },
        {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9780735211292?at=10lIEQ"
        },
        {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292"
        },
        {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear"
        },
        {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS"
        },
        {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT"
        }
    ],
    "__v": 0
}`);

function MakeHTML(c){
    console.log(c);
    const html= 
    `<div class="shopping-list-books-item">
    <div class="shopping-list-books-item-img-div">
    <img src="${c.book_image}" alt="${c.title}" class="shopping-list-books-item-img">
    </div>
    <div class="shopping-list-books-item-info">
    <div class="shopping-list-books-item-basic-info">
    <h2 class="shopping-list-books-item-header">${c.title}</h2>
    <p class="shopping-list-books-item-category">${c.list_name}</p>
    </div>
    <div class="shopping-list-books-item-description-stop-block">
    <p class="shopping-list-books-item-description">${c.description}</p>
    </div>
    <p class="shopping-list-books-item-author">${c.author}</p>
</div>


</div>
<div class="shopping-list-books-item-shops">
    <a href="" class="shopping-list-books-item-amazon-svg">
        <svg width="32px" height="11px">
            <use href=""></use>
        </svg>
    </a>
    <a href="" class="shopping-list-books-item-orange-book-svg">
        <svg width="16px" height="16px">
            <use href=""></use>
        </svg>
    </a>
    <a href="" class="shopping-list-books-item-black-book-svg">
        <svg width="16px" height="16px">
            <use href=""></use>
        </svg>
    </a>
    </div>
    
    <svg width="16px" height="16px" class="shopping-list-delete-svg">
        <use href=""></use>
    </svg>`
return html;
}




