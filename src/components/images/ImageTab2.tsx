import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ImageTab2(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "tablet2.png" }) {
                childImageSharp {
                    fluid(maxWidth: 480) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            alt={`Summer Beach`}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}
