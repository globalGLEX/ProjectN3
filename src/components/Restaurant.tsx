function Restaurant() {
    return (
        <div className="restaurant">
    
            <RestaurantImage />
            <FoodCategories />
            <Products />

    </div>
    );
  }




  function RestaurantImage() {
    return (
        <div className="restaurant-image">
            <div className="restaurant-logo">restologo</div>
            <h1> RESTO1 </h1>
        </div>
    );
  }
  function FoodCategories() {
    return (
        <div className="restaurant-categories">
            <FoodCategoryItem />
            <FoodCategoryItem />
            <FoodCategoryItem />
            <FoodCategoryItem />
            <FoodCategoryItem />
        </div>
    );
  }
  function FoodCategoryItem() {
    return (
        <div className="restaurant-category-item">Buckets</div>
    );
  }
  function Products() {
    return (
        <div>
            <div className="products-category-title">
                <h1>Buckets</h1>
            </div>       
            <div className="products">
                        
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

            </div>
        </div>
    );
  }


  function Product() {
    return (
        <div className="product">
        <div className="product-text"> {/* needs productTitle, productDesc, productPrice */}
            <h3>Chicken wings bucket</h3>
            <p>Chicken wings bucket with 12 pieces and bbq sauce</p>
            <h3 className="product-price">10.0 eur</h3>
            <AddToCartButton />
        </div>
        <div className="product-image"></div>
    </div>
    );
  }
  function AddToCartButton() {
    return (
       
            <button className="add-to-cart-button"> + </button>
        
    );
  }
  export default Restaurant
