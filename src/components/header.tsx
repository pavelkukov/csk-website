import { Link } from 'gatsby'
import React from 'react'

export interface HeaderProps {
    siteTitle: string
}

export default function Header({
    siteTitle,
}: HeaderProps): React.ReactElement<HeaderProps> {
    return (
        <header
            style={{
                background: `midnightblue`,
                marginBottom: `1.45rem`,
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `1.45rem 1.0875rem`,
                }}
            >
                <h1 style={{ margin: 0 }}>
                    <Link
                        to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        {siteTitle}
                    </Link>
                </h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    siteTitle: ``,
}
