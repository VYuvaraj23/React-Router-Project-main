import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import Layout from "./wrappers/Layout";
import Loading from "./components/Loading";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import { productLoader } from "./components/SessionProductsLoader";

export default function App() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      hydrateFallbackElement: <Loading />,
      children: [
        {
          path: "",
          element: <ProductPage />,
          loader: productLoader,
          hydrateFallbackElement: <Loading />,
        },
        { path: "cart", element: <CartPage /> },
        {
          path: "product/:id",
          element: <ProductDetailsPage />,
          hydrateFallbackElement: <Loading />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
      loader: productLoader,
      hydrateFallbackElement: <Loading />,
    },
  ];
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}
