/* eslint-disable react/prop-types */

function Image({ imageURL, alt, className }) {
    return (
        <img className={className} src={imageURL} alt={alt} />
    )
}

export default Image