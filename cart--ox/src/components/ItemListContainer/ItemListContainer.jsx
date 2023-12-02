import React from 'react';
import classes from './ItemListContainer.module.css'

const ItemListContainer = () => {
  // Supongamos que tienes un array de elementos para mostrar
  const items = [
    { id: 1, name: 'Ferrari PUROSANGUE' , image: 'https://cdn.ferrari.com/cms/network/media/img/resize/631f431c482135455e01f05c-ferrari-purosangue-crop-line-up?height=750'},
    { id: 2, name: 'Ferrari 812 GTS' , image: 'https://cdn.ferrari.com/cms/network/media/img/resize/5dd55c232cdb32285a785f25-line-up-ferrari-812-gts?height=750'},
    { id: 3, name: 'Ferrari 296 GTB' , image: 'https://cdn.ferrari.com/cms/network/media/img/resize/60d453eae26eb865e634a268?height=750'},
    
  ];

  return (
    <div className={`${classes.ItemListContainer}`}>
      <h2>Bienvenido a nuestra tienda</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ItemListContainer;
