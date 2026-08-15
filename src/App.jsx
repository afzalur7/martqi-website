import { Routes, Route, useParams } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Export from './pages/Export';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Data
import categories from './data/categories';
import products from './data/products';

// Resolves an /export/:slug URL against the catalog data:
// category slugs take priority, then product slugs.
function ExportItem() {
  const { slug } = useParams();
  const isCategory = categories.some((c) => c.slug === slug);
  return isCategory ? <CategoryPage /> : <ProductDetail />;
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/export" element={<Export />} />
        <Route path="/export/:slug" element={<ExportItem />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
