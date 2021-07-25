import React from 'react'
import {Link} from 'gatsby'
import priceFormat from '../utils/priceFormat'
import { StyledProducts } from '../styles/components' 


export default function Products({ products }) {
    return (
      <StyledProducts>
        <h2>Productos</h2>
        <section>
          {products.map(({ node }) => {
            if (node.product.active) {
            const price = priceFormat(node.unit_amount)
              return (
                <article key={node.id}>
                  <img src={node.product.metadata.img} alt={node.product.name} />
                  <p>{node.product.name}</p>
                  <small>USD {price}</small>
                  <Link to={`/${node.id}`}>
                    Comprar ahora <span>→</span>
                  </Link>
                </article>
              )

            }
          })}
        </section>
      </StyledProducts>
    )
  }