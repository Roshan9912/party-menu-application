import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import SignInPage from './pages/SignInPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import FoodDetailPage from './pages/FoodDetailPage.jsx'
import SavedRecipesPage from './pages/SavedRecipesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MenuPage />
          </ProtectedRoute>
        }
      />
      <Route path="/menu/:id" element={<FoodDetailPage />} />
      <Route path="/saved-recipes" element={<SavedRecipesPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
