/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import './layout.css'

export interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({
    children,
}: LayoutProps): React.ReactElement<LayoutProps> {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        padding: `1em auto`,
                        marginTop: `50px`,
                        fontSize: `16px`,
                        textAlign: `right`,
                    }}
                >
                    <Link to="/">Home</Link> |{' '}
                    <Link to="/privacy-policy/">
                        Color Splash - Kids Privacy Policy
                    </Link>{' '}
                    |{' '}
                    <Link to="/privacy-policy-noads/">
                        Color Splash - Kids (NO ADS) Privacy Policy
                    </Link>
                </footer>
            </div>
        </>
    )
}
