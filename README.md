# E-Commerce Frontend

A modern, responsive React-based e-commerce frontend featuring product browsing, shopping cart management, secure checkout with multiple payment options, user authentication, and real-time order tracking.

## 🎯 Features

### Product Discovery & Browsing

- **Product Catalog** - Browse all available products with detailed information
- **Advanced Search** - Real-time search functionality to find products by name and keywords
- **Product Filtering** - Filter products by category, subcategory, and price range
- **Sorting Options** - Sort products by relevance, price (low to high, high to low)
- **Product Details** - View comprehensive product information including:
  - Multiple product images with zoom capability
  - Detailed descriptions
  - Size selection
  - Pricing information
  - Related products recommendations
- **Best Sellers** - Dedicated section showing popular/bestselling products

### User Authentication

- **User Registration** - Create account with email and secure password
- **User Login** - Secure login with JWT token-based authentication
- **Session Persistence** - Automatic token storage and session recovery
- **Logout Functionality** - Clear session and return to home

### Shopping Cart

- **Add to Cart** - Add products with size selection
- **Cart Management** - View, modify, and manage cart items
- **Quantity Control** - Increase/decrease item quantities
- **Remove Items** - Delete products from cart
- **Cart Summary** - Display cart totals including items count and total price
- **Persistent Cart** - Cart data persists across sessions for logged-in users

### Checkout & Orders

- **Order Placement** - Streamlined checkout process with address entry
- **Multiple Payment Methods**
  - Cash on Delivery (COD)
  - Stripe Credit Card Payment
  - Razorpay Payment Gateway
- **Payment Verification** - Real-time payment status verification
- **Order Confirmation** - Order success/failure handling

### User Dashboard

- **Order History** - View all past and current orders
- **Order Tracking** - Track order status (Order Placed, Processing, Shipped, Delivered)
- **Order Details** - View order items, amounts, and delivery addresses

### Additional Features

- **Newsletter Subscription** - Subscribe to email updates
- **Company Information** - About page with company details
- **Customer Support** - Contact page for inquiries
- **Toast Notifications** - Real-time feedback for user actions
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Navigation** - Intuitive navigation bar with search functionality
- **Policy Information** - Shipping and return policy display

## 🛠 Tech Stack

- **Frontend Framework:** React.js
- **Build Tool:** Vite
- **Routing:** React Router
- **State Management:** Context API
- **HTTP Client:** Axios
- **Styling:** TailwindCSS
- **UI Notifications:** React Toastify
- **Payment Gateways:** Stripe, Razorpay
- **Package Manager:** npm

## 📋 Prerequisites

Before running the application, ensure you have:

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see Backend README)
- Stripe account and publishable key
- Razorpay account and key ID

## ⚙️ Installation

1. **Navigate to the frontend directory:**

   ```bash
   cd FrontEnd
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env.local` file with the following variables:**
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
   ```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The application will start on `http://localhost:5173` (Vite default) or the configured port.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
FrontEnd/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable React components
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   ├── CartTotal.jsx
│   │   ├── ProductItem.jsx
│   │   └── ...
│   ├── context/           # State management with Context API
│   │   ├── ShopContext.jsx
│   │   └── ShopContextProvider.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Collection.jsx
│   │   ├── Product.jsx
│   │   ├── Cart.jsx
│   │   ├── PlaceOrder.jsx
│   │   ├── Orders.jsx
│   │   ├── LogIn.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Verify.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## 🗂 Key Components

### Pages

- **Home** - Landing page with best sellers and hero section
- **Collection** - All products with filters and sorting
- **Product** - Detailed product view with images and description
- **Cart** - Shopping cart with quantity management
- **PlaceOrder** - Checkout page with address entry and payment selection
- **Orders** - User order history and status tracking
- **LogIn** - User authentication (login/register)
- **About** - Company information
- **Contact** - Contact form
- **Verify** - Payment verification and confirmation

### Components

- **NavBar** - Navigation header with search and cart badge
- **SearchBar** - Product search functionality
- **ProductItem** - Product card display
- **CartTotal** - Cart summary and totals
- **BestSeller** - Featured bestselling products
- **LatestCollection** - Newest products section
- **RelatedProducts** - Related product recommendations
- **Footer** - Footer with company links
- **NewsletterBox** - Newsletter subscription
- **OurPolicy** - Policy information display
- **Title** - Reusable title component
- **Hero** - Hero banner section

## 🔄 State Management

The application uses React Context API for global state management through `ShopContextProvider`:

### Context Data

```javascript
{
  products,              // All products array
  currency,              // Currency symbol
  delivery_fee,          // Delivery charge
  cartItems,             // Shopping cart items
  token,                 // Authentication token
  search,                // Search query
  showSearch,            // Search bar visibility
  addToCart,             // Add item to cart function
  updateQuantity,        // Update cart item quantity function
  getCartCount,          // Get total cart items count
  getCartAmount,         // Calculate total cart amount
  navigate,              // Router navigation function
  backendUrl,            // Backend API base URL
}
```

## 🔐 Authentication Flow

1. User registers/logs in on `/login` page
2. Backend returns JWT token
3. Token stored in localStorage
4. Token sent with authenticated API requests
5. Context persists token and user session
6. Automatic logout on token expiration

## 💳 Payment Integration

### Stripe Checkout

- Creates Stripe checkout session
- Handles payment processing
- Redirects to verification page
- Verifies payment status

### Razorpay Payment

- Opens Razorpay payment modal
- Processes payment inline
- Verifies payment callback
- Updates order status

### COD (Cash on Delivery)

- Simple order placement
- No payment processing
- Status updates on delivery

## 🎨 Styling

The application uses **TailwindCSS** for styling with:

- Responsive grid layout
- Flexbox components
- Mobile-first design
- Utility-based styling
- Dark/light mode support ready

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktops (> 1024px)

## 🔗 API Integration

### Base URL

```
${VITE_BACKEND_URL}/api
```

### Endpoints Used

- `GET /product/list` - Get all products
- `POST /user/register` - Register user
- `POST /user/login` - Login user
- `POST /cart/add` - Add to cart
- `POST /cart/update` - Update cart
- `POST /cart/get` - Get user cart
- `POST /order/COD` - Place COD order
- `POST /order/stripe` - Place Stripe order
- `POST /order/razorpay` - Place Razorpay order
- `POST /order/userorders` - Get user orders
- `POST /order/verifyStripe` - Verify Stripe payment
- `POST /order/verifyRazorpay` - Verify Razorpay payment

## 🚨 Error Handling

The application implements error handling with:

- Try-catch blocks for async operations
- Toast notifications for error messages
- Fallback UI states for loading/error conditions
- Input validation before API calls

## ⚡ Performance Optimization

- Code splitting with React Router
- Lazy loading of components
- Image optimization
- Context API for state management (avoids prop drilling)
- Axios request/response interceptors ready

## 📦 Dependencies

### Core

- `react` - UI library
- `react-dom` - DOM rendering
- `react-router-dom` - Client-side routing

### HTTP & State

- `axios` - HTTP client
- `context-api` - State management (built-in)

### UI & Styling

- `tailwindcss` - CSS framework
- `react-toastify` - Toast notifications

### Payment

- `stripe` - Stripe payment processing
- `razorpay` - Razorpay integration

### Build

- `vite` - Build tool
- `eslint` - Code linting

## 🎯 Future Enhancements

- Product reviews and ratings
- Wishlist functionality
- Advanced search filters
- Product recommendations engine
- User profile management
- Multiple language support
- Dark mode toggle
- Progressive Web App (PWA)
- Analytics integration

## 🔧 Configuration

### Vite Configuration

See `vite.config.js` for:

- Build optimization
- Environment variables
- Plugin configuration

### ESLint Configuration

See `eslint.config.js` for:

- Code quality rules
- Style guidelines

## 💡 Development Tips

1. **Environment Variables** - Always use `VITE_` prefix for frontend env vars
2. **Component Structure** - Keep components focused and reusable
3. **State Management** - Use Context for global state, useState for local state
4. **API Calls** - Centralize API calls in components or custom hooks
5. **Error Handling** - Always handle API errors with user-friendly messages

## 📄 License

This project is property of the development team.

## 🤝 Support

For issues or questions, please contact the development team.

---

**Last Updated:** March 13, 2026
