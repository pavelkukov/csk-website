import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export interface CSKLabelHProps {
    alt: string
}

export default function CSKLabelH({
    alt,
}: CSKLabelHProps): React.ReactElement<CSKLabelHProps> {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "csk-label-h.png" }) {
                childImageSharp {
                    fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            imgStyle={{ objectFit: 'contain' }}
            alt={alt}
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}
