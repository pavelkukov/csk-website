import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ImageGetItOnPlayStore(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "get-it-from-play-store.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 960) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            alt={`Get it from play store`}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}
