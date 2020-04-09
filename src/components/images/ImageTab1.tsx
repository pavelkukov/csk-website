import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ImageTab1(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "tablet1.png" }) {
                childImageSharp {
                    fluid(maxWidth: 360) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            alt={`Spring Rain`}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}
