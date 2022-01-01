import Slider from 'features/HomePage/components/Slider';
import React from 'react';
import Category from './pages/Category';
import Combo from './pages/Combo';
import Footer from './pages/Footer';
import SearchBtn from './pages/SearchBtn';
import Menu from './pages/Menu';

export default function Main() {
  return (
    <>
      <SearchBtn />
      <Slider />
      <Combo />
      <Category />
      <Menu />
      <Footer />
    </>
  );
}
