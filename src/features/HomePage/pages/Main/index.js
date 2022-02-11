import Slider from 'features/HomePage/components/Slider';
import React from 'react';
import Category from './Category';
import Combo from './Combo';
import Footer from './Footer';
import SearchBtn from '../../components/SearchBtn';
import Menu from './Menu';

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
