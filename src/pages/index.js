import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from '../components'



export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice{
      edges{
        node{
          id
          unit_amount
          product{
            active
            name
            metadata{
              img
              description
              wear
            }      
          }
        }
      }
    }  
  }
`



const IndexPage = ({data}) => {
  console.log(data)
  return(
  <div>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Products products={data.allStripePrice.edges} />
  </div>
)}

export default IndexPage
