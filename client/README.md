# ProjectN3

ProjectN3 is a food delivery app for a fictional company.
I wanted to make sure I could build and integrate the frontend, express API and SQLite database and have data move through them before starting to use LLM's.
The database file will be created automatically when the app is used. It stores orderId, orderTime and order(text).

The stack is Vite + React + TS + node/express + SQLite.

Next planned features: Signup, Login, Authorization, possibly checkout page and payment integration.

--Relevant files--

index.html - root divs for modals, backdrops, script connecting to main.tsx
index.css - all css in one file
main.tsx - entry point. Sets up React Router and renders the app
data.tsx - module containing restaurant and product data, prices
Cart.tsx - gets order data from localStorage, generates timestamp and sends to API
CartContent.tsx - items in the cart and total price
CartContentItem.tsx - a single item in the cart, communication with localStorage and removal of item
Categories.tsx - categories of food styles for filtering out restaurants
Footer.tsx - mostly empty currently
Header.tsx - header with buttons for cart, login, signup. Communicates with localStorage, creates       portals for modals and backdrops
Login.tsx - login form
Signup.tsx - signup form
OrderModal.tsx - modal with a specific product's info, amount, options, addToOrder button, generates cartId (UUID) and sets it in localStorage.
Restaurant.tsx - page of a single restaurant, with categories and products
Restaurants.tsx - shows restaurants that match selected category



