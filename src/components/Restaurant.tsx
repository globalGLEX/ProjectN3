import {data} from '../modules/data.tsx';

interface RestaurantImageProps {
    /* list of props */
    imageUrl: string;
    imageUrlAlt: string;
    
    logoUrl: string;
}
interface FoodCategoryItemProps{
    
    catName: string;
   
}
interface ProductProps {
    imageUrl: string;
    imageAlt: string;
    name: string;
    desc: string;
    price: number;
}
function Restaurant() {
    return (
        <div className="restaurant">
          
            <RestaurantImage imageUrl={data.restaurants[0].imageUrl} imageUrlAlt={data.restaurants[0].imageUrlAlt} logoUrl={data.restaurants[2].logoUrl}/>
            <FoodCategories />
            <Products />
            

    </div>
    );
  }




  function RestaurantImage(props: RestaurantImageProps) {
    return (
        <div className="restaurant-image">
            <img src={props.imageUrl || 'https://placehold.co/1920x600'} alt={props.imageUrlAlt} />
            <div className="restaurant-logo">
            <img src={props.logoUrl || 'https://placehold.co/150x150'}  />
            </div>
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
            
        </div>
    );
  }
  function FoodCategoryItem(props: FoodCategoryItemProps) {
    
    return (
        <div className="restaurant-category-item"><p>{props.catName}</p></div>
    );
  }
  function Products() {
    return (
        <div>
            <div className="products-category-title">
                <h1>{data.restaurants[0].categories[0]}</h1>
            </div>       
            <div className="products">
                        
                <Product 
                    name={data.restaurants[2].products[0].name}
                    desc={data.restaurants[2].products[0].desc}
                    price={data.restaurants[2].products[0].price}
                    imageUrl={data.restaurants[2].products[0].imageUrl}
                    imageAlt={data.restaurants[2].products[0].alt}
                    />
                <Product 
                     name={data.restaurants[1].products[1].name}
                     desc={data.restaurants[1].products[1].desc}
                     price={data.restaurants[1].products[1].price}
                     imageUrl={data.restaurants[1].products[1].imageUrl}
                     imageAlt={data.restaurants[1].products[1].alt}
                     />
                <Product 
                    name={data.restaurants[1].products[2].name}
                    desc={data.restaurants[1].products[2].desc}
                    price={data.restaurants[1].products[2].price}
                    imageUrl={data.restaurants[1].products[2].imageUrl}
                    imageAlt={data.restaurants[1].products[2].alt}
                    />
                <Product 
                    name={data.restaurants[1].products[3].name}
                    desc={data.restaurants[1].products[3].desc}
                    price={data.restaurants[1].products[3].price}
                    imageUrl={data.restaurants[1].products[3].imageUrl}
                    imageAlt={data.restaurants[1].products[3].alt}
                    />
                <Product 
                    name={data.restaurants[1].products[4].name}
                    desc={data.restaurants[1].products[4].desc}
                    price={data.restaurants[1].products[4].price}
                    imageUrl={data.restaurants[1].products[4].imageUrl}
                    imageAlt={data.restaurants[1].products[4].alt}
                    />
                <Product 
                    name={data.restaurants[0].products[5].name}
                    desc={data.restaurants[0].products[5].desc}
                    price={data.restaurants[0].products[5].price}
                    imageUrl={data.restaurants[0].products[5].imageUrl}
                    imageAlt={data.restaurants[0].products[5].alt}
                    />
                
            

            </div>
        </div>
    );
  }


  function Product(props: ProductProps) {
    return (
        <div className="product">
        <div className="product-text"> {/* needs productTitle, productDesc, productPrice */}
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <h3 className="product-price">{props.price} €</h3>
            <AddToCartButton />
        </div>
        <div className="product-image"><img src={props.imageUrl || 'https://placehold.co/200x200'} alt={props.imageAlt} /></div>
    </div>
    );
  }
  function AddToCartButton() {
    return (
       
            <button className="add-to-cart-button"> + </button>
        
    );
  }
  export default Restaurant
