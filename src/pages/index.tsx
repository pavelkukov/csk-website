import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageTab1 from '../components/images/ImageTab1'
import ImageTab2 from '../components/images/ImageTab2'
import ImageTab3 from '../components/images/ImageTab3'
import ImagePho1 from '../components/images/ImagePho1'
import ImagePho3 from '../components/images/ImagePho3'
import ImageGetItOnPlayStore from '../components/images/ImageGetItOnPlayStore'

export default function IndexPage(): React.ReactElement {
    return (
        <Layout>
            <SEO title="Color Splash - Kids" />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                    style={{
                        padding: `0 20px`,
                        width: `250px`,
                    }}
                >
                    <ImageTab1 />
                </div>
                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <p>
                        <strong>
                            &quot;Color Splash - Kids&quot; is a free, creative,
                            coloring book for children on Android.
                        </strong>{' '}
                        It offers an artistic and fun new way to play with
                        colors while challenging the imagination.
                    </p>
                    <p>
                        Discover a continually growing collection of drawings, a
                        wide selection of colors, and a variety of cute
                        stickers. Simple interface, and beautiful illustrations
                        make Color Splash - Kids an excellent game for all ages.
                        Get ready for a great time!
                    </p>
                    <p>
                        Works on tablets and phones. No registration required.
                        New images are available for free.
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                    style={{
                        width: '50%',
                        paddingTop: '40px',
                    }}
                >
                    <a href="https://play.google.com/store/apps/details?id=com.codeiterator.colorsplashkids">
                        <ImageGetItOnPlayStore />
                    </a>
                </div>
                <div style={{ width: '50%' }}>
                    <h3
                        style={{
                            marginTop: `20px`,
                        }}
                    >
                        🌈 Features:
                    </h3>
                    <ul>
                        <li>Choose a magic wand, pastels, or stickers</li>
                        <li>Color and recolor as many times as you want</li>
                        <li>Save and print colored or non-colored images</li>
                        <li>Share your creations with family and friends</li>
                        <li>
                            After an image is initially selected, it becomes
                            available offline
                        </li>
                        <li>Regular updates in the gallery every week</li>
                    </ul>
                </div>
            </div>

            <h3>🎨 THE GAME THAT KEEPS YOU LONGING FOR MORE</h3>
            <p>
                Color beautiful florals, sea, animals, shapes, letters and
                digits - all tailored for children.
            </p>

            <p>
                Have fun playing Color Splash - Kids the most colorful game
                around!
            </p>
            <p>
                Looking for{' '}
                <a href="https://play.google.com/store/apps/details?id=adults.coloring.books">
                    coloring pages for adults
                </a>
                ? Visit:{' '}
                <a href="https://coloring-pages.tv/">
                    https://coloring-pages.tv/
                </a>
            </p>

            <p>
                Do not sell my data: User data is NOT collected. Your{' '}
                <Link to="/privacy-policy/">privacy</Link> is important.
            </p>
            <p>
                Color Splash - Kids (NO ADS) is an add free version. Because ads
                are not shown, your{' '}
                <Link to="/privacy-policy-noads/">privacy</Link> is even more
                secure.
            </p>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                    style={{
                        width: `45.25%`,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: `50%` }}>
                            <ImagePho1 />
                        </div>
                        <div style={{ width: `50%` }}>
                            <ImagePho3 />
                        </div>
                    </div>
                    <div>
                        <ImageTab3 />
                    </div>
                </div>
                <div style={{ width: `54%` }}>
                    <ImageTab2 />
                </div>
            </div>
        </Layout>
    )
}
