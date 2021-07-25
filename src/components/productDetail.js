import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import { CartContext } from '../context'
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components"
import { SEO, Stars } from "./"

export default function ProducDetail({
  unit_amount,
  id,
  product: { name, metadata },
  }) {
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const formatPrice = priceFormat(unit_amount * qty)
  const { cart,  addToCart } = useContext(CartContext)
  
  const handleSubmit = () => {

    let onCart = false

    cart.map(item => {
      if (item.id === id) {
        onCart = true
        item.qty += qty
      }
    })

    if (!onCart) addToCart({unit_amount, id, name, metadata, qty})

  }
  
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatPrice}</b>
        <Stars />
        {metadata.wear && (<h3>Color: Azul</h3>)}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}