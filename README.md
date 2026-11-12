# 🖼️ Pexels Gallery - Image Search Application

A modern, responsive image gallery application built with React and the Pexels API. Search millions of high-quality photos with an intuitive interface and smooth user experience.

![Main Page](screenshot/main_page.png)

## 🚀 Live Demo

**[View Live Demo](https://martin-frei.github.io/react-pexels-gallery)**

## ✨ Features

- 🔍 **Smart Search** - Search through millions of high-quality images
- 🎯 **Quick Filters** - Pre-defined category buttons for instant browsing
- 📱 **Responsive Design** - Optimized for all screen sizes
- ⚡ **Fast Loading** - Efficient API integration with loading states
- 🎨 **Modern UI** - Clean interface with Tailwind CSS
- 🖱️ **Smooth Interactions** - Hover effects and transitions

## 🛠️ Tech Stack

- **React** (Hooks: useState, useEffect, useRef)
- **Tailwind CSS** - Utility-first styling
- **Pexels API** - High-quality image source
- **Async/Await** - Modern JavaScript patterns

## 📸 Screenshots

### Main Gallery View
![Main Page](screenshot/main_page.png)

### Search Functionality
![Germany Pictures](screenshot/germany_pictures.png)

### Loading State
![Loading](screenshot/loading_new_pictures.png)

## 🎯 Key Concepts Demonstrated

- ✅ **API Integration** - RESTful API calls with proper authentication
- ✅ **State Management** - React Hooks (useState, useEffect, useRef)
- ✅ **Async Operations** - Fetch API with error handling
- ✅ **Form Handling** - Search input with validation
- ✅ **Dynamic Rendering** - Category filters with map function
- ✅ **Responsive Grid** - CSS Grid with Tailwind
- ✅ **Loading States** - User feedback during data fetching

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Martin-Frei/react-pexels-gallery.git
   cd react-pexels-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your Pexels API key** (see [Configuration](#-configuration))
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔧 Configuration

The app needs a free [Pexels API key](https://www.pexels.com/api/).

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```
2. Insert your key in `.env`:
   ```
   REACT_APP_PEXELS_API_KEY=your_pexels_api_key_here
   ```
3. Restart `npm start` – Create React App reads `.env` only at startup.

`.env` is listed in `.gitignore` and must never be committed.

**Note:** This is a frontend-only app. The key is embedded in the JavaScript bundle at build time and is visible to anyone who opens the deployed site. For a real production app, keep the key on a server instead:
- Backend proxy server (Node.js/Django)
- Serverless functions (Netlify/Vercel)

## 📦 Project Structure

```
react-pexels-gallery/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js              # Main app component
│   ├── PexelsGallery.jsx   # Gallery component with API logic
│   ├── App.css             # Styling
│   └── index.js            # Entry point
├── screenshot/             # App screenshots
├── package.json
└── README.md
```

## 🎨 Features in Detail

### Search Functionality
- Real-time search with debouncing
- Input validation
- Clear search results

### Category Filters
Pre-defined categories for quick browsing:
- People, Fruits, City, Animals
- Cars, Buildings, Food
- React, Python, Germany

### Image Grid
- Responsive 4-column grid layout
- Hover scale effects
- Optimized image loading (medium resolution)
- Clean card design with shadows

## 🔄 API Integration

Using the [Pexels API](https://www.pexels.com/api/) for:
- Image search functionality
- High-quality stock photos
- 40 images per request
- Authorization via API key

## 🌱 Future Enhancements

- [ ] Infinite scroll / pagination
- [ ] Image modal/lightbox view
- [ ] Favorites/liked images (localStorage)
- [ ] Download functionality
- [ ] Advanced filters (color, orientation, size)
- [ ] Search history
- [ ] Dark mode toggle
- [ ] Backend proxy for API key security

## 📚 What I Learned

This project helped me practice:
- Working with external REST APIs
- Managing async operations in React
- Implementing search and filter functionality
- Creating responsive layouts with Tailwind CSS
- Handling loading and error states
- Using React refs for form controls

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Martin Freimuth**
- GitHub: [@Martin-Frei](https://github.com/Martin-Frei)
- LinkedIn: [martin-freimuth](https://www.linkedin.com/in/martin-freimuth-089249359/)
- Email: mat.frei@gmx.de

## 🙏 Acknowledgments

- [Pexels](https://www.pexels.com/) for providing the free API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the awesome JavaScript library

---

**⭐ If you found this project helpful, please consider giving it a star!**

*Built with ❤️ using React and Tailwind CSS*