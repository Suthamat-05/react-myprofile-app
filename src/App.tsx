import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyCard from './components/MyCard';
import SideMenu from './components/SideMenu';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import EduExp from './pages/EduExp';
import Spec from './pages/Spec';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import ContactMe from './pages/ContactMe';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1D1C1D] text-white flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-[1140px] flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Component กลางด้านซ้าย */}
          <MyCard />

          {/* พื้นที่แสดงเนื้อหาทั้ง 7 หน้า */}
          <main className="flex-1 w-full lg:px-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/eduexp" element={<EduExp />} />
              <Route path="/spec" element={<Spec />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contactme" element={<ContactMe />} />
            </Routes>
          </main>

          {/* Component กลางด้านขวา */}
          <SideMenu />
        </div>
      </div>
    </BrowserRouter>
  );
}