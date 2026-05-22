# Expense Tracker App

A mobile-first personal finance application built with React that helps users manage income and expenses efficiently through a clean and intuitive UI.

The project focuses on accurate UI implementation, reusable component architecture, state management using React hooks/context, and persistent client-side data storage using `localStorage`.

---

## 🚀 Features

### ✅ Implemented Features

- Add new transactions (Income & Expense)
- Edit existing transactions
- Delete transactions
- Categorize transactions
  - Food
  - Travel
  - Bills
  - Health
  - Shopping
  - Entertainment
  - etc.
- Real-time balance calculation
- Real-time income & expense summaries
- Transactions grouped by date
  - Today
  - Yesterday
  - Specific dates
- Category-based transaction filtering
- Search transactions by note/title
- Persistent data using `localStorage`
- Empty states when no transactions exist
- Mobile-first responsive layout
- Reusable React component architecture
- Context + `useReducer` based state management

### Transaction Actions

To keep the UI clean and aligned with the provided mobile-first design, dedicated edit/delete buttons were not added directly to the transaction cards.

Instead:

- Users can tap/click on a transaction item from the Transactions screen
- Selecting a transaction opens it in editable mode
- Users can then:
  - Update transaction details
  - Delete the transaction

This interaction pattern helps maintain a minimal and uncluttered mobile UI while still supporting full transaction management functionality.

---

## 🚧 In Progress

### Analytics Screen

The Analytics module is currently under development.

Planned functionality includes:

- Spending breakdown donut/pie chart
- Monthly expenditure analytics
- Month-over-month comparison
- Category-wise spending percentages
- 6-month spending trend visualization
- Interactive analytics dashboard

Charts will be implemented using:

- Recharts or Chart.js

---

## 📱 Screens

### Dashboard
- Total balance overview
- Income vs expense summary cards
- Spend analytics preview banner
- Recent activity list with category icons

### Transactions
- Searchable transaction history
- Transactions grouped by date
- Horizontal category filter chips
- Tap on a transaction item to edit or delete it

### Add Transaction
- Income / Expense toggle
- Amount input
- Category selection grid
- Date picker
- Notes input
- Save transaction functionality

### Analytics *(In Progress)*
- Monthly navigation
- Donut chart visualization
- Spending category breakdown
- 6-month trend chart

---

## 🛠 Tech Stack

- React
- Vite
- Plain CSS
- React Hooks
- Context API
- useReducer
- localStorage

---

## 🧠 State Management

The application uses:

- `Context API`
- `useReducer`
- `useEffect`
- `useState`

for centralized transaction management and predictable state updates.

---

## 💾 Data Persistence

All transaction data is stored locally using the browser's `localStorage`.

This ensures:
- Data persists across page reloads
- No backend setup is required
- Fast client-side experience

---

## 📂 Project Structure

```bash
src/
│
├── components/
├── pages/
├── context/
├── reducer/
├── assets/
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Priyesh289/expense_tracker
```

### 2. Navigate to Project

```bash
cd expense-tracker
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

---

## 🎯 Key Development Decisions

### Mobile-First Approach
The UI was developed primarily for mobile screens to closely match the provided designs and ensure a better small-screen user experience.

### Component Reusability
Reusable components were prioritized to keep the codebase maintainable and scalable.

### Context + Reducer Pattern
Instead of introducing Redux, React Context with `useReducer` was used to keep global state management lightweight and clean.

### Client-Side Persistence
`localStorage` was selected to avoid backend complexity while still providing persistent user data.

---

## 📌 What I'd Improve With More Time

- Complete the Analytics dashboard
- Improve UI polish and animations
- Add tablet & desktop responsiveness
- Add form validation and better error handling
- Improve accessibility
- Add dark mode support
- Add unit/component testing
- Optimize rendering performance for large transaction lists



