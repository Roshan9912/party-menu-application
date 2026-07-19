# Party Menu Application

A React 19 + Vite 6 application for browsing a party menu, filtering dishes, viewing details, and saving recipes.

## Features

- Email/password login using the live authentication API
- Protected main menu route for signed-in users
- Dish filtering by category, diet, and name search
- Dish detail pages with ingredients and full description
- Saved recipe persistence in local storage
- Logout clears session and redirects to sign in
- 404 page with contextual back navigation

## Running locally

```bash
npm install
npm run dev
```

Open the app at `http://localhost:5173`.
## Production readiness

- Responsive layout and plain CSS styling
- Authentication state persisted in local storage
- Saved recipes sync across browser tabs
- Clean route structure with protected and public routes
- Production build verified with `npm run build`
## Test credentials

- Email: `admin@example.com`
- Password: `admin123`

## Build

```bash
npm run build
```

## Storage keys

- `party_menu_token`
- `party_menu_user`
- `party_menu_saved_recipes`

## Notes

- Menu data is static and stored in `src/data/menuData.js`
- Only authentication uses the live API endpoint
- App styling is implemented using plain CSS
