# 🛒 Amazon Clone – MERN Stack

A simple **Amazon Clone** project built using the **MERN stack**  
(**MongoDB, Express.js, React.js, Node.js**).  

The app displays products and carousel images that come from the backend (stored in MongoDB).  
It focuses mainly on the **frontend page view**, with responsive UI and basic routing.

---

## 🚀 Features

- 🏠 Amazon-style homepage layout  
- 🖼️ Carousel images & product data fetched from backend (MongoDB)  
- 🧭 React Router for page navigation  
- 🎨 Responsive design using Bootstrap + CSS  
- ⚙️ Node.js + Express backend API  
- 🗄️ MongoDB database for data storage  
- 📦 Multer for image upload handling  
- 🔐 dotenv for environment configuration  
- 🌍 CORS enabled for cross-origin requests  

---

## 🧰 Tech Stack

| Layer | Technology | Purpose |
|--------|-------------|----------|
| Frontend | React.js | UI development |
| Styling | Bootstrap, CSS, Bootstrap Icons | Responsive design and icons |
| Routing | React Router DOM | Page navigation |
| API Requests | Axios | Communicate with backend |
| Backend | Node.js, Express.js | REST API server |
| Database | MongoDB, Mongoose | Store and manage product & image data |
| Utilities | dotenv, multer, cors | Environment vars, uploads, CORS handling |

---
## 📦 Frontend Dependencies
```json
{
  "axios": "^1.13.1",
  "bootstrap": "^5.3.8",
  "bootstrap-icons": "^1.13.1",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.9.5"
}
```
⚙️ Backend Dependencies
```json
{
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "express": "^5.1.0",
  "mongoose": "^8.19.2",
  "multer": "^2.0.2"
}
```
⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/nsufiyan/amazon_clone.git

2️⃣ Run the backend

cd backend

npm install

node index.js

The backend will start (for example, on port 5000).

3️⃣ Run the frontend

Open a new terminal:

cd frontend

npm install

npm start

Then open localhost:3000 in your browser.

🧑‍💻 Author

Developer: Shaik Nizamuddin Sufiyan
**GitHub:** [@nsufiyan](https://github.com/nsufiyan)

⚠️ Disclaimer

This project is created for learning and demonstration purposes only.

It is not affiliated with Amazon in any way.
