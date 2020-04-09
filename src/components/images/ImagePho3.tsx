import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ImagePho2(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "phone3.png" }) {
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
            alt={`Surf Boy`}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}
