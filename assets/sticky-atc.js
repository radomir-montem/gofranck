class stickyAtc extends HTMLElement {
    constructor() {
        super();
        this.productForm = document.querySelector('.sg-product-hero .sg-product-page-hero');
        this.stickyButton = this.querySelector('button');
        this.atcButtton = document.querySelector('.sg-product-page-button');
        this.productInfo = document.querySelector('.sg-product-page-purchase-block');
    }

    connectedCallback() {
        const _this = this;
        const handleIntersection = (entries, observer) => {
            entries.forEach(entrie => {
                _this.classList.toggle('hidden', entrie.isIntersecting && window.scrollY > _this.productForm.getBoundingClientRect().bottom);
                _this.classList.toggle('show', !entrie.isIntersecting && window.scrollY > _this.productForm.getBoundingClientRect().bottom);
            });
        }

        new IntersectionObserver(handleIntersection.bind(this.productForm), { rootMargin: `-500px 0px 0px 0px` }).observe(this.productForm);
        this.stickyButton.addEventListener('click', this.onClickAtcButton.bind(this));
    }

    onClickAtcButton(e) {
        e.preventDefault();
        document.querySelector('product-form').scrollIntoView({ behavior: "smooth", block: "end" });
    }
}

customElements.define('sticky-atc', stickyAtc);