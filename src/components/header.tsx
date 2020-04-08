import { Link } from 'gatsby'
import React from 'react'

import ImageBee from './images/ImageBee'
import CSKLabelH from './images/CSKLabelH'

export interface HeaderProps {
    siteTitle: string
}

export default function Header({
    siteTitle,
}: HeaderProps): React.ReactElement<HeaderProps> {
    return (
        <header
            style={{
                background: `#fd9900`,
                marginBottom: `1.45rem`,
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    height: `90px`,
                    display: `flex`,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ margin: 0 }}>
                    <Link
                        to="/"
                        style={{
                            textDecoration: `none`,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <div
                                style={{
                                    width: `400px`,
                                    height: `40px`,
                                    overflow: `hidden`,
                                }}
                            >
                                <CSKLabelH alt={siteTitle} />
                            </div>
                            <div
                                style={{
                                    width: `60px`,
                                    margin: `0 20px`,
                                }}
                            >
                                <ImageBee />
                            </div>
                        </div>
                    </Link>
                </h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    siteTitle: ``,
}
