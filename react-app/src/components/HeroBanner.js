import React from 'react';
import HeroNavbar from './HeroNavbar';

const HeroBanner = () => {
    return (
        <>
            <HeroNavbar />
            <section className={"hero is-medium"}>
                <div className={"hero-body"}>
                    <div className={"container"}>
                        <h1 className={"title is-size-1 has-text-light"}>
                            Tarot Cards
                        </h1>
                        <h2 className={"subtitle is-size-3"}>
                            Major Arcana and Minor Arcana
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroBanner;
