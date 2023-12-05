import React from 'react';
import Listing from './components/Listing';
import data from './data/etsy.json';
import './App.css';

export interface offerProps {
  listing_id: number,
  url: string,
  MainImage: string,
  title: string,
  currency_code: string,
  price: string,
  quantity: number,
}

function App() {
  const items = data.map(item => ({
    listing_id: item.listing_id,
    url: item.url,
    MainImage: item.MainImage && item.MainImage.url_570xN,
    title: item.title,
    currency_code: item.currency_code,
    price: item.price,
    quantity: item.quantity,
  }));

  return (
    <>
      <Listing items={items}/>
    </>
  );
}

export default App;
