import {data} from '../modules/data.tsx';
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
            <div className="restaurant-logo"></div>
            <h1> {data.restaurants[0].name} </h1>
        </div>
    );
  }
  function FoodCategories() {
    return (
        <div className="restaurant-categories">
            <FoodCategoryItem catName={data.restaurants[0].categories[0]}/>
            <FoodCategoryItem catName={data.restaurants[0].categories[1]}/>
            <FoodCategoryItem catName={data.restaurants[0].categories[2]}/>
            <FoodCategoryItem catName={data.restaurants[0].categories[3]}/>
            <FoodCategoryItem catName="Coffee"/>
        </div>
    );
  }
  function FoodCategoryItem(props) {
    
    return (
        <div className="restaurant-category-item"><p>{props.catName}</p></div>
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
