import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ImageTab3(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "tablet3.png" }) {
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
            alt={`Pidgin`}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}
