## FOREVER | A Scalable & Seamless E-Commerce Solution Built with the MERN Stack
**FOREVER** is a full-stack e-commerce web application designed to deliver a smooth, responsive, and modern shopping experience. 
Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), this project showcases a complete and scalable solution 
for online retail platforms.

It leverages Redux Toolkit for powerful and organized state management and uses Material UI for a clean, intuitive, and 
responsive user interface.
To enhance user flexibility, this project integrates two major online payment gateways: **Stripe** and **Razorpay**, allowing smooth and secure transactions.

---

## 👤 User Features

- 🔍 Explore, filter, and sort products
- 🛒 Add products to cart with selected variants (e.g., size)
- 📦 Place orders with delivery address input
- 💳 Pay via Cash on Delivery, Stripe, or Razorpay
- 📜 View order history and details

---

## 🧑‍💼 Admin Features

- ➕ Add new products with details and images
- 🗑️ Delete or update existing products
- 📦 View all orders placed by customers
- 📊 Manage product inventory through a dedicated dashboard

---
![Project Screenshot](./Screenshot%202025-06-04%20133938.png)
![Project Screenshot](./Screenshot%202025-06-04%20135711.png)

## 🛠️ Installation & Setup


# Clone the repository
```bash
git clone https://github.com/Chetankoliparthi/forever-ecommerce.git
```
# Navigate to project folder
```bash
cd ecommerce
```
# Install dependencies for client and server
```bash
cd client && npm install
cd ../server && npm install
```
# Create environment variables (.env) for backend
# Example:
```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
```
# Start the development servers
```bash
cd server && npm run dev
cd ../client && npm start
```
