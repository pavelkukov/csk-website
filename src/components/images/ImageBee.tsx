import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ImageBee(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "bee.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            alt={`Color Splash - Kids (icon)`}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}
