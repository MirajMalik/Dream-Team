# 🏏 Dream Team

A React-based cricket player selection application that allows users to build their dream cricket team within a budget constraint. Select your favorite players, manage your balance, and create the perfect team composition.

---

## ✨ Features

- **Player Selection**: Browse and select cricket players from an available pool
- **Budget Management**: Start with a budget of 60,000,000 Taka and manage player purchases accordingly
- **Team Limit**: Build a team with a maximum of 6 players
- **Dynamic Balance Tracking**: Real-time balance updates as you add or remove players
- **Two-View Interface**: Toggle between available players and selected players views
- **Toast Notifications**: User-friendly notifications for actions and feedback
- **Responsive Design**: Fully responsive UI built with Tailwind CSS and DaisyUI

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev)
- **Build Tool**: [Vite](https://vitejs.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [DaisyUI](https://daisyui.com)
- **State Management**: React Hooks (useState)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify)
- **Linting**: ESLint
- **Development**: Hot Module Replacement (HMR)

---

## 📁 Project Structure

```
Dream-Team/
├── src/
│   ├── components/
│   │   ├── AvailablePlayers/
│   │   │   ├── AvailablePlayers.jsx      # Main available players container
│   │   │   └── AvailablePlayerCart.jsx   # Individual player card component
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx                 # Navigation bar with balance display
│   │   └── SelectedPlayers/
│   │       ├── SelectedPlayers.jsx        # Selected players container
│   │       └── SelectedPlayerCard.jsx     # Individual selected player card
│   ├── App.jsx                            # Main application component
│   ├── index.css                          # Global styles
│   ├── main.jsx                           # React entry point
│   └── assets/                            # Static assets
├── public/
│   └── players.json                       # Player data
├── vite.config.js                         # Vite configuration
├── tailwind.config.js                     # Tailwind CSS configuration
├── postcss.config.js                      # PostCSS configuration
├── eslint.config.js                       # ESLint configuration
└── package.json                           # Project dependencies

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Dream-Team
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```



## 🎮 How to Use

1. **Browse Available Players**: The app starts by displaying all available cricket players
2. **Select Players**: Click on a player to add them to your team
   - Your available balance will decrease by the player's price
   - The player will appear in your selected team
3. **Switch Views**: Use the buttons at the top to toggle between:
   - **Available Players**: View players you can still add
   - **Selected Players**: View your current team (shows count out of 6)
4. **Remove Players**: Click the remove button on a player in your selected team to add them back to available
   - Your balance will be refunded

---

## 📊 State Management

The app manages the following state:

- **`toggle`**: Boolean to switch between available/selected player views
- **`availableBalance`**: Current budget (starts at 60,000,000)
- **`selectedPlayers`**: Array of selected player objects

---

## 🎨 UI Components

### Navbar

Displays the application title and available budget

### AvailablePlayers

Shows all players available for selection with their details and price

### SelectedPlayers

Displays currently selected players with an option to remove them

---

## 📦 Dependencies

### Production

- **react**: ^19.2.5 - UI library
- **react-dom**: ^19.2.5 - React DOM rendering
- **react-toastify**: ^11.1.0 - Toast notifications

### Development

- **vite**: ^8.0.10 - Build tool
- **@vitejs/plugin-react**: ^6.0.1 - React plugin for Vite
- **tailwindcss**: ^3.4.19 - Utility-first CSS framework
- **daisyui**: ^5.5.19 - Component library
- **eslint**: ^10.2.1 - Code linting
- **postcss**: ^8.5.13 - CSS transformation
- **autoprefixer**: ^10.5.0 - CSS vendor prefixing

---

## 🔧 Configuration

### Tailwind CSS

Custom configuration available in `tailwind.config.js`

### Vite

Development and build settings configured in `vite.config.js`

### ESLint

Linting rules defined in `eslint.config.js`

---





## 📄 License

This project is open source and available under the MIT License.



