LaunTrack Laundry Monitoring System - Updated

FRONTEND FEATURES
- Dashboard totals for orders, customers, staff, collected payments, and outstanding balances.
- Add customer records (name, contact number, address).
- Add staff records (name, contact number, position).
- Create laundry orders for registered customers.
- Update order progress (Pending, Processing, Ready for Pickup, Completed).
- Record partial or full payments. Payment totals and balances update automatically.
- Customer/staff/order/payment records are saved in browser localStorage, so they remain after refresh in the same browser/device.

RUN
1. Open a terminal in the client folder.
2. Run: npm install
3. Run: npm run dev
4. Open the local URL printed by Vite.

IMPORTANT
This updated interface uses browser localStorage for working demo data. It does not yet connect the UI to the MySQL/Sequelize backend. Data is local to the browser and is not shared between devices or users. For a production multi-user system, configure the database and connect the API endpoints.
