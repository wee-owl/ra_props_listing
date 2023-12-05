import React from 'react';
import { offerProps } from '../App';
import ListingItem from './ListingItem';
import '../App.css';

interface itemsProps {
  items: offerProps[],
}

function Listing({ items }: itemsProps) {
  return (
    <div className="item-list">
      {
        items.map(item => <ListingItem key={item.listing_id} item={item}/>)
      }
    </div>
  )
}

export default Listing;
