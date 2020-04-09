import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function ImagePho1(): React.ReactElement {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "phone1.png" }) {
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
            alt={`Summer Bird`}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}
