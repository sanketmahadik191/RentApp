# Rent App

## Overview
Rent App is a web application designed to facilitate the rental process for properties. It enables users to browse rental listings, connect with property owners, and manage their rental transactions efficiently.

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Hosting:** Vercel (Frontend), Render/Heroku (Backend)

## Features
- User authentication (Signup/Login)
- Property listings with search and filter functionality
- Renters can browse and contact property owners
- Owners can add, edit, and manage their property listings
- Wishlist functionality
- Responsive UI for mobile and desktop

## Project Structure
```
/rent-app
│── frontend/        # React frontend with Vite
│── backend/         # Express.js backend
│── models/         # Database models (MongoDB)
│── routes/         # API routes
│── controllers/    # Business logic for APIs
│── middleware/     # Authentication & validation
│── config/         # Database and server configuration
│── public/         # Static assets
│── README.md       # Project documentation
```

## Installation
### Prerequisites
Ensure you have Node.js and MongoDB installed.

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/rent-app.git
   cd rent-app
   ```

2. Install dependencies:
   ```sh
   cd api
   npm install
   cd ../client
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend` directory with:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```

4. Start the application:
   ```sh
   cd backend
   npm start
   ```
   ```sh
   cd frontend
   npm run dev
   ```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user

### Properties
- `GET /api/properties` - Fetch all listings
- `POST /api/properties` - Add new listing (Owner only)
- `PUT /api/properties/:id` - Update listing (Owner only)
- `DELETE /api/properties/:id` - Remove listing (Owner only)

## Future Enhancements
- Payment integration for online rent payments
- Chat feature for renter-owner communication
- Booking and scheduling for property visits
- AI-based property recommendations

## Deployment
- **Frontend:** Deployed on Render
- **Backend:** Deployed on Render

## Contributing
Contributions are welcome! Fork the repo and submit a pull request.

