let isLoading = false;

window.addEventListener('scroll', () => {
    if (isLoading) return;

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        loadMoreItems();
    }
});

function loadMoreItems() {
    isLoading = true;
    document.getElementById('loader').style.display = 'block';

    setTimeout(() => {

        for (let i = 0; i < 10; i++) {
            const div = document.createElement('div');
            div.className = 'product-card';

            const img = document.createElement('img');
            img.src = "https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg?w=360";
            img.alt = "Product";

            const h3 = document.createElement('h3');
            h3.textContent = 'Product ' + (document.querySelectorAll('#itemContainer .product-card').length + i + 1);
           
            const p = document.createElement('p');
            p.textContent = h3.textContent + "description" ;

            const btn = document.createElement('button');
            btn.className = 'button_store';
            btn.textContent = "Add to Cart";

            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(btn);

            document.getElementById('itemsContainer').appendChild(div) ;
        
        }
        document.getElementById('loader').style.display = 'none' ;
        isLoading = false;
    }, 1000);
}
