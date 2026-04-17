import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { HenBreedsPage } from "./pages/HenBreedsPage";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { GalleryPage } from "./pages/GalleryPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "breeds", Component: HenBreedsPage },
      { path: "products", Component: ProductsPage },
      { path: "about", Component: AboutPage },
      { path: "gallery", Component: GalleryPage },
      { path: "blog", Component: BlogPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);