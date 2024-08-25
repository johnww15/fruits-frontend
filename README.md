# Developing a full stack ecommerce web application

## Project Brief

**MVP**

- Built with MongoDB, Express.js, React.js and Node.js
- Backend repository can be accessed here -> (https://github.com/johnww15/fruits-backend)

  **TimeFrame**

- 1 week

**Features**

- User authentication (Signup, Login, Logout)
- Customer and Shop Owner specific features
- Customer shopping cart, checkout and history purchases
- Owner's real-time order, inventory, fulfillment tracking

<br>

## Technologies and Tools used

- MongoDB
- Express.js
- React.js
- Node.js
- MUI
- JWToken
- Bcrypt
- Git & Github
- Vite

<br>

## Description

A full stack fruit stall ecommerce web application for shop owner accounts to create listings and stock tracking for customers to purchase from.

## Analysis of Code

### API Endpoints

**Users**

- `POST /api/users` - Register a new user
- `POST /api/users/login` - Login a user

**Inventory**

- `GET /api/inventory` - Retrieves all inventory data entries for user(Buyer) to shop
- `GET /api/inventory/:userId` - Retrieves all inventory data of a sepcific user(seller)
- `POST /api/inventory` - User(Seller) creates new inventory
- `PUT /api/inventory/:inventoryId` - Update quantity of existing inventory entry
- `DELETE /api/inventory/:inventoryId` - Deletes an inventory entry

**Purchases**

- `GET /api/purchases/:buyerId` - Retrieves all purchases for a specific user(Buyer)
- `GET /api/purchases/shop/:sellerId` - Fetches all purchases for a specific user(seller)
- `GET /api/purchases/history/:buyerId` - Fetches all purchases that have previously been paid by a user(Buyer)
- `GET /api/purchases/inventory/:inventoryId` - Fetches all purchases referencing a specific inventory entry
- `POST /api/purchases` - User(Buyer) creates new purchase
- `PUT /api/purchases/update/:buyerId` - Updates purchase entry when paid
- `PUT /api/purchases/update/shop/:purchaseId` - Updates purchase entry when fulfilled
- `DELETE /api/purchases/purchaseId` - Deletes a purchase entry

  **User Routes**

## Screenshots of Application

**ERD**
![ERD](https://github.com/johnww15/fruits-frontend/blob/main/public/01_ERD.png?raw=true)

- Basic ERD Diagram to showcase the different data models

**Login Account Screen**
![Login Screen](https://github.com/johnww15/fruits-frontend/blob/main/public/02_Login.png?raw=true)

**Customer Home Page**
![Customer Home Page](https://github.com/johnww15/fruits-frontend/blob/main/public/03_CustomerHomePage.png?raw=true)

- Customers can click on the shopping cart icon to create a new purchase

**Customer Past Purchases**
![Customer Past Purchases](https://github.com/johnww15/fruits-frontend/blob/main/public/04_CustomerPastPurchases.png?raw=true)

- Customers can view their previous purchases and can click the "Quick Buy" button to immediately create a new purchase with the same quantity as before

**Customer Shopping Cart**
![Customer Shopping Cart](https://github.com/johnww15/fruits-frontend/blob/main/public/05_CustomerCart.png?raw=true)

- Customers can click the trashcan icon to delete an existing purchase request before proceeding to check out

**Shop Owner Store Page**
![Owner Home Page](https://github.com/johnww15/fruits-frontend/blob/main/public/06_OwnerHomePage.png?raw=true)

- Shop Owners can view their current stock levels on the page, add new listings or update existing listings

## Customer Stories

1. As a customer, I want to see a list of fruits that are available to buy (complete with stock and pricing information), so that I can decide which fruits I want to buy.

- COMPLETED
- Customers can view all available inventory listings

2. As a customer, I want to keep track of the fruits and quantity that I have shortlisted (including the total amount I need to pay), so that I can adjust my purchasing decisions as I shop.

- COMPLETED
- Customers have access to a shopping cart (including the total amount they need to pay) and can delete the entries if they change their mind

3. As a customer, I want to submit my order of the fruits I selected, so that I can complete my purchase when I am done shopping. Assume that payment is done separate from this POS application.

- COMPLETED
- Customers can submit their shopping cart and will be redirected to a mock payments page.

4. As an owner, I want to see the orders that my customers have submitted, so that I can fulfill their orders.

- COMPLETED
- Owners have access to an Orders page to view existing orders which they can then update as fulfilled

5. As an owner, I want to see the total sales for each day and for each fruit, so that I can track the performance of my store.

- SEMI-COMPLETED
- Currently, owners can view a graph charting the order of fruits against the date that the orders were made. The sale is currently not developed because owners are able to alter the price of their listings. However, it is possible to implement this since purchases made prior to the price change can be used to calculate the sales as well.

6. As an owner, I want to be able to add new fruits and amend my stock levels, so that I can keep my online store up to date.

- COMPLETED
- Owners are able to add new listings and alter existing listings

7. As a customer, I want to be able to log in and see my order history, so that I can track my previous purchases.

- COMPLETED
- Customers can see an order history of their previous purchases and will be able to track if those orders are fulfilled

8. As a customer, I want to be able to re-order a previous order, so that I can quickly purchase the same items again.

- COMPLETED
- Customers have a quick buy feature to immediately add a past purchase from their order history to their current shopping cart

9. As a customer, I want to know how many people are currently considering buying a fruit, so that I can make a quick decision before the stock runs out.

- SEMI-COMPLETED
- A customer will not be able to see how many people are currently considering but are able to compare the amount of stock that has moved from a listing to know if it's selling well. However, this can be implemented by counting the number of users(buyers) which have an existing purchase or a historical purchase from a specific listing.

10. As a customer, I want to be able to ask the store owner common questions about a fruit, so that I can make an informed decision about my purchase.

- INCOMPLETE
- Due to time constraint, I was not sure if I could complete this feature in time.
- I can include a similar feature to how purchases are currently moved between a customer and a shopowner by moving messages across as individual message entries. Within the message model, we can include boolean properties like buyerReplied and sellerReplied to determine which user persona currently views the message. An additional API endpoint can then be created for buyers to delete the message if required. This suggestion however will not store a history of the message thread.
- In the event we wish to record the message thread and history, each message will need to be its own data entry.

11. As a customer, I want to be able to use the app on my phone so I can shop on the go.

- INCOMPLETE
- I am not as familiar with implementing this effectively. My current understanding will be to include different CSS conditions depending on the viewport. However, when it comes to the NavBar, I might have to recreate the NavBar into a dropdown menu component to fit the smaller screen size.

12. As a customer, I want my order shortlist to be saved so that I can continue shopping on my device layer, even if I have not logged in.

- INCOMPLETE
- I am not familiar with implementing this effectively. My current understanding will be to allow the inventories to be viewed even without authentication and to record a temporary shopping cart in the localstorage to be retrieved when a user logs in.

13. As a customer, after logging in, I want my order shortlist to be saved so that I can log in and continue shopping on another device later.

- COMPLETE
- the order shortlist is currently stored in the database and is retrieved according to the user that is logged in

14. As an owner, I want to be able to serve millions of customers at the same time, so that I can scale my business.

- INCOMPLETE

15. As an owner, I do not want my customers to be able to see the whole store's order history, or amend my stocks, or perform any actions that should only be available for me.

- COMPLETE
- Current features are gated according to the status of the user isOwner?

16. As an owner, I want my customers' order submissions to be encrypted, so they cannot be intercepted by my competitors.

- INCOMPLETE
- Order submissions are not encrypted but should not be accessible if the user trying to access them does not have the userId referenced in the purchaes

17. As a customer, I want the fruit store pages to load quickly at all times, so that I can browse and shop without delays.

- INCOMPLETE
- Not too sure what this is referring to but I have done my best to reduce the number of api calls that are sent per page/action done by the user
