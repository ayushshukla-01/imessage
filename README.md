# 💬 Full Stack Real-Time Chat Application

A modern full-stack real-time chat application built with **React**, **Node.js**, **Express.js**, **MongoDB**, **Socket.IO**, and **Clerk Authentication**. The application supports instant messaging, media sharing, online user tracking, customizable themes, and responsive UI, providing a smooth real-time communication experience.

## 🚀 Live Demo

🌐 **Live Application:** [https://your-render-url.onrender.com](https://echatapp-w5xf.onrender.com/)

## 📸 Screenshots

> Add screenshots of your application inside a `screenshots/` folder.

```text
screenshots/
├── login.png
├── home.png
├── chat.png
├── profile.png
└── settings.png
```

```md
![Login](screenshots/login.png)
![Home](screenshots/home.png)
![Chat](screenshots/chat.png)
```

---

# ✨ Features

* 🔐 Secure Authentication using Clerk
* 💬 Real-Time One-to-One Messaging
* ⚡ Instant Message Delivery with Socket.IO
* 🟢 Online User Presence
* 📷 Image Sharing
* 🎥 Video Sharing
* 🎨 Light & Dark Mode
* 🌈 Multiple UI Themes
* 🖼️ Custom Chat Wallpapers
* 🔊 Optional Keyboard Sound Effects
* 📁 Media Upload & Optimization using ImageKit
* 🔄 Persistent Chat History
* 📱 Fully Responsive Design
* 🛡️ Protected Backend APIs
* ☁️ Dockerized Deployment
* 🚀 Production Ready

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Hero UI
* Zustand
* Axios
* Socket.IO Client

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* Clerk Authentication
* ImageKit

## Deployment

* Docker
* Render
* MongoDB Atlas

---

# 📂 Project Structure

```text
chat-app/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── lib/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── Dockerfile
├── README.md
└── package.json
```

---

# ⚙️ Environment Variables

## Backend (.env)

```env
PORT=3000
NODE_ENV=development

MONGO_URI=your_mongodb_uri

CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
CLERK_WEBHOOK_SIGNING_SECRET=your_secret

IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url

FRONTEND_URL=http://localhost:5173
```

## Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_API_URL=http://localhost:3000
```

---

# 🚀 Installation

Clone the repository

```bash
git clone[ https://github.com/yourusername/chat-app.git](https://github.com/ayushshukla-01/imessage)
```

Navigate into the project

```bash
cd chat-app
```

Install dependencies

```bash
npm install
```

Run the backend

```bash
npm run dev
```

Run the frontend

```bash
cd frontend
npm run dev
```

---



# 🌟 Highlights

* Real-Time Chat Application
* Secure User Authentication
* Production Ready Backend
* Responsive Modern UI
* Media Sharing
* Theme Customization
* Socket.IO Integration
* Docker Deployment
* MongoDB Atlas Integration
* Clerk Authentication
* ImageKit Media Optimization

---

# 🚀 Future Enhancements

* ✅ Message Read Receipts (✓ Seen)
* ✅ Typing Indicator
* ✅ Group Chat
* ✅ Voice Messages
* ✅ Emoji Picker
* ✅ Reply to Messages
* ✅ Edit Messages
* ✅ Delete Messages
* ✅ Message Reactions
* ✅ Message Search
* ✅ Pinned Conversations
* ✅ Push Notifications
* ✅ End-to-End Encryption
* ✅ Video Calling
* ✅ Audio Calling
* ✅ User Blocking
* ✅ Friend/Contact System
* ✅ Recent Chats Only Sidebar
* ✅ File Sharing (PDF, DOCX, ZIP)
* ✅ Drag & Drop Uploads
* ✅ Message Forwarding
* ✅ AI Chat Assistant Integration

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork this repository and submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Ayush Shukla**



---

⭐ If you found this project useful, consider giving it a star.
