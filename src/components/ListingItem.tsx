import React from 'react';
import { offerProps } from '../App';
import '../App.css';

interface itemProps {
  item: offerProps,
}

function ListingItem({ item }: itemProps) {

  const trimTitle = (string: string) => {
    return string.length > 50 ? string.substring(0, 50) + '...' : string;
  }

  const setCurrency = (code: string) => {
    return code === 'USD' ? `$ ${item.price}` : code === 'EUR' ? `€ ${item.price}` : `${item.price} GBR`;
  }

  const setLevel = (quantity: number) => {
    return quantity < 10 ? 'low' : quantity > 20 ? 'high' : 'medium';
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{trimTitle(item.title)}</p>
        <p className="item-price">{setCurrency(item.currency_code)}</p>
        <p className={`item-quantity level-${setLevel(item.quantity)}`}>{item.quantity} left</p>
      </div>
    </div>
  )
}

export default ListingItem;
