import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ImageTab1 from '../components/images/ImageTab1'
import ImageTab2 from '../components/images/ImageTab2'
import ImageTab3 from '../components/images/ImageTab3'
import ImagePho1 from '../components/images/ImagePho1'
import ImagePho3 from '../components/images/ImagePho3'

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
                        It offers a colorful and fun new way to play with colors
                        while challenging the imagination.
                    </p>
                    <p>
                        Discover a continually growing collection of drawings
                        and a wide selection of colors to try. No need to buy
                        reams of coloring books - this one is the best one for
                        kids. It gives you something more than just a coloring
                        book; coloring can become a way of life. There are also
                        a variety of fun stickers available. Get ready for a
                        great time!
                    </p>
                    <p>
                        All images are printable directly from the app. You can
                        share or save colored drawings. Use this app on your
                        tablet or phone. No registration is required. New images
                        are available for free.
                    </p>
                </div>
            </div>
            <h3>🌈 Features:</h3>
            <ul>
                <li>Choose a magic wand, pastels, or stickers</li>
                <li>Color and recolor as many times as you want</li>
                <li>Save and print colored or non-colored images</li>
                <li>Share your creations with family and friends</li>
                <li>
                    After an image is initially selected, it becomes available
                    offline
                </li>
                <li>Regular updates in the gallery every week</li>
            </ul>

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
                Do not sell my data: User data is NOT collected. Your{' '}
                <Link to="/privacy-policy/">privacy</Link> is important.
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
