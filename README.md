# 🛍️ ShopSphere – Modern React Product Store

**ShopSphere** is a responsive e-commerce frontend application built using React. It provides a modern shopping experience where users can explore products, filter categories, search items, sort products, and manage their shopping cart.

## 🌟 Project Overview

ShopSphere is designed to demonstrate the development of a modern online shopping interface using React components, state management, and responsive CSS styling.

The application includes a product collection across Electronics, Fashion, and Accessories categories, along with interactive shopping cart functionality.

## ✨ Features

- **Modern Homepage:** Clean and attractive shopping interface.
- **Product Display:** Eight products with images, prices, ratings, and descriptions through category labels.
- **Category Filtering:** Browse Electronics, Fashion, and Accessories.
- **Product Search:** Search products by name or category.
- **Sorting:** Sort products by price (low to high, high to low) and customer rating.
- **Shopping Cart:** Add and remove products.
- **Quantity Management:** Increase or decrease product quantities.
- **Dynamic Cart Count:** Automatically updates the cart badge.
- **Price Calculation:** Automatically calculates subtotal and shipping charges.
- **Demo Checkout:** Displays an order confirmation message.
- **Responsive Design:** Supports desktop, tablet, and mobile screens.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| JavaScript (ES6+) | Application logic |
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| Vite | Development server and build tool |
| ESLint | Code quality and linting |

## 📂 Project Structure

```text
React_Store/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd React_Store
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in browser

Visit:

```text
http://localhost:5173/
```

## 🛒 Application Workflow

1. Users visit the ShopSphere homepage.
2. Browse the available products.
3. Select a category or search for a product.
4. Sort products based on price or rating.
5. Add selected products to the shopping cart.
6. Manage product quantities.
7. View automatically calculated prices.
8. Place a demo order and view confirmation.

## 💡 Key Learning Outcomes

Through this project, I gained practical experience in:

- Building reusable React components.
- Managing application state using `useState`.
- Filtering and sorting product data.
- Using `useMemo` for derived product lists.
- Handling user interactions and event callbacks.
- Creating responsive layouts with CSS Grid and Flexbox.
- Developing an interactive shopping cart.
- Running a React application using Vite.

## ⚠️ Project Limitations

- This is a frontend demonstration project.
- Product information is stored in a local JavaScript array.
- Cart information is maintained in React state and is not persisted after refreshing.
- No backend database or authentication system is connected.
- Checkout is simulated; no real payment is processed.
- Product images are loaded from Unsplash and require an internet connection.

## 🚀 Future Enhancements

- Backend integration using Node.js and Express.
- Database integration using MongoDB.
- User registration and login.
- Persistent shopping cart.
- Product details pages.
- Wishlist functionality.
- Secure payment gateway integration.
- Real order management and tracking.

## 👩‍💻 Developer

**Developed as part of the Week 4 project assignment.**

**Project Name:** ShopSphere – Modern React Product Store

---

⭐ If you find this project interesting, consider giving the repository a star!
