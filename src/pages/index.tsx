import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function IndexPage(): React.ReactElement {
    return (
        <Layout>
            <SEO title="Color Splash - Kids" />
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>

            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    )
}
