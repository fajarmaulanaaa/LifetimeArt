# Hyge Test Frontend Developer

This project is a Task Hyge. It requires Node.js and npm for installation and setup.

# Mobile Animation Approach

1. Per-item whileInView, not parent stagger: each element animates only when it actually enters the viewport.

2. Reduced motion respected: useReducedMotion() disables marquee loops and shortens/zeros durations.

3. Full-bleed rails when needed: w-screen mx-[calc(50%-50vw)] plus a gradient mask to let rails extend beyond the 1440px container smoothly.

## Prerequisites

- **Node.js** (latest version recommended)
- **npm** (latest version)

## Installation Steps

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
Clone this repository to your local machine:

git clone https://github.com/fajarmaulanaaa/LifetimeArt.git
cd LifetimeArt

### 2. Install Depedencies 
npm install

### 3. Run the Development Server
npm run dev

### 4. Access the Application
Once the server is running, open your browser and navigate to http://localhost:3000 to view the app

## Url Application
If you want to visit the application that has been deployed, you can visit the following link : https://lifetime-art-seven.vercel.app/

