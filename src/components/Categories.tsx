import burger from '../assets/categories-burger.jpg';
import american from '../assets/categories-american.jpg';
import japanese from '../assets/categories-japanese.jpg';
import pizza from '../assets/categories-pizza.jpg';
import wraps from '../assets/categories-wraps.jpg';
import cafe from '../assets/categories-cafe.jpg';


function Categories() {
    return (
        <div className="categories"><h2>Categories - need scrollable element here</h2>
            <div className="category-items-container">
                <div className="category-item"> <img src={burger} alt="Burger" /></div>
                <div className="category-item"><img src={american} alt="American BBQ" /></div>
                <div className="category-item"><img src={cafe} alt="Cafe food" /></div>
                <div className="category-item"><img src={japanese} alt="Japanese ramen" /></div>
                <div className="category-item"><img src={wraps} alt="Wraps" /></div>
                <div className="category-item"><img src={pizza} alt="Pizza" /></div>
            </div>
            
        </div>
    );
  }
 /*  function CategoriesCarousel() {
    return (
            
        <div className="categories-carousel">
            <ul>
            <li>
                <h2>Page 1</h2>
            </li>
            <li>
                <h2>Page 2</h2>
            </li>
            <li>
                <h2>Page 3</h2>
            </li>
            <li>
                <h2>Page 4</h2>
            </li>
            </ul>
        </div>
    );
  }  */
  export default Categories
  