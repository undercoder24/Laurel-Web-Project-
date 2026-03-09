import React from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS } from './types';
import { ArrowRight, Star, Utensils, History, Calendar, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import ReservationForm from './components/ReservationForm';
import AdminDashboard from './components/AdminDashboard';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { cn } from './lib/utils';

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <img 
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7uVfOV13XmhGxqrQ40d0uIA0nruEEoD5Wxni6k_zrg_YQh8D0pXCvNV1z7Uv6NBK1hdzblEftXrFnOcwLe8aZ__wSL692abzF65GvyODEKV85wTUGzcpjw9XzwuCNbvBiWTPqiW3QmEXA3saqamqZoYF4fnsrDeCcrGqOp8EkzLqVn9wwvbN2sAiLx08Sr4rcjNLNZcBHdOWYkilj5mgJ_jBR5drR7CyDgg1BoXQ74uh1Iepqch6AQrG5iXu5t5pGVKYvmrIe1sc" 
      alt="Laurel Logo" 
      className="size-10"
      referrerPolicy="no-referrer"
    />
    <span className="text-xl font-bold uppercase tracking-tight">Laurel</span>
  </div>
);

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Inicio', path: '/' },
            { name: 'Menú', path: '/menu' },
            { name: 'Sobre Laurel', path: '/sobre' },
            { name: 'Catering', path: '/catering' },
            { name: 'Galería', path: '/galeria' },
            { name: 'Contacto', path: '/contacto' },
          ].map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                location.pathname === link.path ? "text-primary font-bold" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/admin" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5">
            <Utensils size={18} />
            <span className="text-xs font-bold uppercase">Admin</span>
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link 
            to="/reservas"
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all"
          >
            Reservar
          </Link>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white border-t border-primary/10 pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="flex flex-col gap-6">
        <Logo />
        <p className="text-sm text-slate-500 leading-relaxed">
          Comprometidos con la excelencia y la tradición mediterránea desde 1984.
        </p>
        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h5 className="font-bold uppercase text-xs tracking-widest text-primary">Horario</h5>
        <ul className="flex flex-col gap-3 text-sm text-slate-600">
          <li className="flex justify-between"><span>Lun - Jue</span> <span>13:00 - 23:00</span></li>
          <li className="flex justify-between font-bold text-slate-900"><span>Vie - Sáb</span> <span>13:00 - 00:00</span></li>
          <li className="flex justify-between"><span>Domingo</span> <span>13:00 - 18:00</span></li>
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <h5 className="font-bold uppercase text-xs tracking-widest text-primary">Enlaces</h5>
        <ul className="flex flex-col gap-3 text-sm">
          {['Nuestro Menú', 'Vinos de la Casa', 'Trabaja con nosotros', 'Política de Privacidad'].map(link => (
            <li key={link}><a className="text-slate-600 hover:text-primary transition-colors" href="#">{link}</a></li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6">
        <h5 className="font-bold uppercase text-xs tracking-widest text-primary">Contacto</h5>
        <ul className="flex flex-col gap-4 text-sm text-slate-600">
          <li className="flex items-start gap-3">
            <MapPin className="text-primary shrink-0" size={18} />
            <span>Calle de la Tradición 42,<br/>28001 Madrid, España</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-primary shrink-0" size={18} />
            <span>+34 912 345 678</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="text-primary shrink-0" size={18} />
            <span>hola@laurelrestaurante.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-10 border-t border-primary/5 text-center">
      <p className="text-xs text-slate-500 uppercase tracking-[0.2em]">
        © 2024 Laurel Food & Wine. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {/* Hero */}
    <section className="relative px-6 py-12 lg:py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Gastronomía Mediterránea</span>
            <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Elegancia y <br/> Tradición <span className="text-primary">Familiar</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Descubre la esencia de la cocina mediterránea en un ambiente tranquilo, donde cada detalle cuenta una historia de sabor y dedicación.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/reservas" className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
              Reservar una Mesa
            </Link>
            <Link to="/menu" className="border-2 border-primary/20 hover:border-primary px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Ver Carta
            </Link>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx0AMyOzZaczOJR8kf-bgMQ_MwL_xhsjz0WblC3le93jkMxuUqtZRm-Voxa1cf8V9QLhx3VOEe0QDvW4PIYqIp_sUoAHQAE94xf9q88es9hlgdQaIo4sgtBeUCAhGKjn0hUGmvvp7FTFf84I-2vOxu_dYzMDkoaLums-SET_0ZVTtoQecJ41fEXFynefoJi0iH76WeciVkNnLrgqvxDMNxRX2_m_dVz_8RSLU3i5xb19IU1kRUc9ENJ-BYJhpo23RkoqY-i7vdkeY" 
            alt="Interior" 
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
            <p className="text-primary font-bold text-2xl">4.9/5</p>
            <p className="text-xs font-medium text-slate-500">Valoración de clientes</p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured */}
    <section className="bg-primary/5 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Platos Destacados</h3>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENU_ITEMS.slice(0, 3).map(item => (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="text-primary font-bold">{item.price}€</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* History */}
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTmVFlrJji_Qp5WO5JpZHhvvCreewHMBeQi7gh3NDMCXTNDIY0vkvcThNoCKK8--Nueuw1ITYa1JU1n8uDwWpDa65vZ8OcrOoOo_JFaoSSJROAuW-Ay5lZIXkVo59v0FXjPZDIBkDW1s82ITtUzogmMxcDHwnLO8ge4r3aoOno51dzQ7bUk8cT8nm492WVKXKNcAgEK3246TuD1nIELRye6GZYyoYIqYPIr3K683fTwq34uhl_s1jRp_mE2nRzMJvckGWBYl5sXWA" alt="History" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl lg:text-4xl font-bold">Nuestra Historia</h3>
          <p className="text-lg text-slate-600 leading-relaxed italic">
            "La cocina no es solo comida, es el lenguaje con el que mi abuela nos decía que nos quería. Hoy, Laurel es nuestra forma de decirte lo mismo a ti."
          </p>
          <p className="text-slate-600 leading-relaxed">
            Fundada en 1984 por la familia García, Laurel nació del deseo de preservar las recetas tradicionales que pasaron de generación en generación.
          </p>
          <Link to="/sobre" className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
            Conoce más sobre nosotros <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </motion.div>
);

const Menu = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 lg:px-40 py-12 space-y-20">
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 italic">Entradas</h2>
        <div className="h-[1px] flex-grow bg-primary/30"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {MENU_ITEMS.filter(i => i.category === 'entradas').map(item => (
          <div key={item.id} className="flex gap-4 group cursor-pointer">
            <img src={item.image} alt={item.name} className="size-24 rounded-lg object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                <span className="text-primary font-bold">{item.price}€</span>
              </div>
              <p className="text-sm text-slate-500 leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 italic">Platos Principales</h2>
        <div className="h-[1px] flex-grow bg-primary/30"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {MENU_ITEMS.filter(i => i.category === 'principales').map(item => (
          <div key={item.id} className="flex gap-4 group cursor-pointer">
            <img src={item.image} alt={item.name} className="size-24 rounded-lg object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                <span className="text-primary font-bold">{item.price}€</span>
              </div>
              <p className="text-sm text-slate-500 leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 italic">Especialidades</h2>
        <div className="h-[1px] flex-grow bg-primary/30"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {MENU_ITEMS.filter(i => i.category === 'especialidades').map(item => (
          <div key={item.id} className="flex gap-4 group cursor-pointer">
            <img src={item.image} alt={item.name} className="size-24 rounded-lg object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                <span className="text-primary font-bold">{item.price}€</span>
              </div>
              <p className="text-sm text-slate-500 leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 italic">Postres y Vinos</h2>
        <div className="h-[1px] flex-grow bg-primary/30"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {MENU_ITEMS.filter(i => ['postres', 'vinos'].includes(i.category)).map(item => (
          <div key={item.id} className="flex gap-4 group cursor-pointer">
            <img src={item.image} alt={item.name} className="size-24 rounded-lg object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                <span className="text-primary font-bold">{item.price}€</span>
              </div>
              <p className="text-sm text-slate-500 leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-bold leading-tight text-slate-900">Tradición y elegancia desde hace cuatro décadas</h2>
        <p className="text-slate-700 text-lg leading-relaxed">
          Laurel abrió sus puertas por primera vez en el otoño de 1984. Lo que comenzó como un modesto sueño familiar de compartir recetas ancestrales se ha transformado en un referente culinario.
        </p>
        <p className="text-slate-700 text-lg leading-relaxed border-l-4 border-primary pl-6 italic">
          "Nuestra misión siempre ha sido crear un espacio donde el tiempo se detenga y cada bocado cuente una historia de amor por la tierra."
        </p>
      </div>
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeXy3JvzRLkCKPlcX5gqQHZ-8lBaTnq4UF4XdyX_XbTE9xUc5PRD1CIdF1thJpsc5qEGv8YD1TJiQ1FWwiEYqXzkJRXSbVJ3hmwxLgQRX3NlrHpszTtcOvE9LzOlLSM5gpT91lMg_zdGVh5IooM6i_rD8v3MM6PZfi6Zl_vFH6VVvJatUX4X1L4kcGKbjjE9mJfULS_3izDz_rHOgmyVsqjupsir10lFki0pn2JQpO90rEnvHeMiQWXC1Cro3c9qWGABZyPEwU7j0" alt="About" className="rounded-xl shadow-lg h-[400px] object-cover" referrerPolicy="no-referrer" />
    </div>
  </motion.div>
);

const Catering = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-slate-900 text-white py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Eventos Exclusivos</span>
        <h3 className="text-4xl lg:text-5xl font-bold mb-6">Llevamos Laurel a tu celebración</h3>
        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          Desde bodas íntimas hasta grandes eventos corporativos, nuestro nuevo servicio de catering ofrece la misma excelencia culinaria que en nuestro restaurante.
        </p>
        <button className="bg-primary text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all">
          Solicitar Presupuesto
        </button>
      </div>
    </div>
  </motion.div>
);

const Gallery = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 py-12">
    <h2 className="text-4xl font-black mb-12">Nuestra Galería</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBFdZ9-Ar1CPvzWEs79JHwpe2xQ6aI6W5-AW6lb80k3np4QahRlNE-aqWqtbqmcbhpGx7tout4cD4BVNDBNb9CKpwW4DIgAezCJIAyWIxFd0xWy_a__z2dvVUk1ao-34SICf4qdwb6b-WxIZpXI9QP1powaJfUSTarrUlhEnJo6GgVrQR8Wz1GpzHNs-IUSt-cRDEAWWfhUXh54v_VNx1jO-7oBjVx_VjQS9iLsxWUCIq4ilyvTVbx3N44rnR5AJ5TC0vRl2o9CWZI',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBWFoCo2S04EKKI4aDAtUqrck1jb5NZUUpcjAhlka1dj0nXOt6cv-hkKUNRW-QOPU-NH5m18YrIr_XWI0fRLs04SRhVC5ApEb3evOBSVIcpXLwz1ufXzbz9o_oy8Fo0vaRt6dlap4R0QV2bG6-BVT-T-ao-Clp8BwP4_s5POz51iushJWVOPgtJxMFSG7QAWwm7fQslg5Wi1mvrZyQRVwIvSMYQMP-uEuMqpz7_OvL8kC6yLNxeBbnO8dlg0fLkXnHfkT2xTs-mYR4',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBsYF33DESJmCwtR9LZgSu5UB2VbLOb-c_4aTPZd601_ATdiecobCgZjrLwQ027J60S-pKbKzD4rsgQcflDwkurVnm2XqRU06jf7sib80OMt4y72ViyLbNC6dHCd53yxQbviLwaWdNq5NQXPtSXWuLaxqI5Hj7NcX2E6dr2X6i22cr4IZ_Pyr9Kww3hXZsKfpbGW3SFCtXCkMpbo8-whHI4fCz4lVFPlMjiczOTJW3nF8a144pGWDhrlCuhAHeHRnQ0dllg568y3BQ'
      ].map((img, i) => (
        <img key={i} src={img} alt={`Gallery ${i}`} className="rounded-xl aspect-square object-cover shadow-md hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
      ))}
    </div>
  </motion.div>
);

const Contact = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-bold">Estamos en el corazón de Madrid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <MapPin className="text-primary mb-2" />
            <h3 className="font-bold">Dirección</h3>
            <p className="text-slate-600 text-sm">Calle de la Tradición 42, Madrid</p>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <Phone className="text-primary mb-2" />
            <h3 className="font-bold">Teléfono</h3>
            <p className="text-slate-600 text-sm">+34 912 345 678</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl overflow-hidden h-[400px] bg-slate-200">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbcGh-PrXFFJUgS5G0pKT97JV_jHBULCG75mmpN6qrI9Ada1ip3KKM9SFssaxb1T3Kx98oSnmMmUsJaJkOKW8ehRdcXaiLtg0FWVq1FAZ8FAsri_aHAAvwt1P9MlSoYFuODgSK8sKmcGcOWbZi7O_6oCrFVlkIsfHgGSHFtAGGdlww714ZAU4tyaZO0d8jurT5xXyKjXbOwQeo9QLarNxu9HTYWOp2PnNFBMQg4j7PeVfoUo_ElnlulHzuBt5swKw3xTdRutYYLJ0" alt="Map" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/reservas" element={<div className="max-w-4xl mx-auto py-20 px-6 text-center"><h1 className="text-4xl font-black mb-10">Reserva tu Mesa</h1><ReservationForm /></div>} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
