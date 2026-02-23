## 🚚 Zap-Shift | Real-Time Delivery & Logistics Management

Zap-Shift is a high-performance logistics ecosystem designed to streamline the connection between businesses, riders, and customers. By leveraging real-time geospatial data, the platform provides live tracking and intelligent dispatching to solve last-mile delivery challenges.

## 🚀 Key Features

✔️ Triple-Interface System: Unique dashboards and views for Admins, Riders, and Customers.
✔️ Live Geospatial Tracking: Real-time map movement using Leaflet and React-Leaflet for precise order monitoring.
✔️ Intelligent Dispatch: Admin system that assigns orders to the nearest available rider based on proximity.
✔️ Data Analytics: Interactive delivery performance charts and order statistics powered by Recharts.
✔️ Role-Based Access: Secure authentication via Firebase ensuring users only see relevant data.
✔️ Optimized Performance: Fast data fetching and synchronization using TanStack Query.
✔️ Responsive UI: Modern, mobile-first design built with Tailwind CSS v4.

## 🛠️ Tech Stack

Frontend:
Framework: React 19 (Vite)
Styling: Tailwind CSS v4
State Management: TanStack Query (React Query)
Maps: Leaflet & React-Leaflet
Forms: React Hook Form
Animations: React Lottie & Swiper

📦 Backend & Database:
Runtime: Node.js & Express
Database: MongoDB
Authentication: Firebase Auth

## 🧠 Challenges Overcome

The primary technical hurdle was implementing real-time location synchronization without causing performance lag or excessive API calls.

Solution: Used TanStack Query for efficient caching and optimized Leaflet markers to update only when coordinates changed, significantly reducing re-renders.

Logic: Developed a custom algorithm on the backend to calculate the "Nearest Rider" using geographic coordinates, ensuring efficient order distribution.

🤝 Contact

Mohyminul Islam

LinkedIn: https://www.linkedin.com/in/mohyminulislam/
Portfolio: https://mohyminulislam.vercel.app/
