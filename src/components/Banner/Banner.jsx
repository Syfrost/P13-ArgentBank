import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';
function Banner({ image, subtitles, text }) {
    const backgroundImage = {
        backgroundImage: `url(/${image})`,
    };

    return (
        <div className="hero" style={backgroundImage}>
            {subtitles && (
                <section className="hero-content">
                    {subtitles.map((subtitle, index) => (
                        <p key={index} className="subtitle">{subtitle}</p>
                    ))}
                    <p className="text">{text}</p>
                </section>
            )}
        </div>
    );
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    subtitles: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
};

export default Banner;