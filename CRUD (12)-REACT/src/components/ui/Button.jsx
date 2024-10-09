/* eslint-disable react/prop-types */

function Button({ children, className, ...rest }) {
    return (
        <button className={`${className} rounded-md py-2 cursor-pointer text-white`}{...rest}>
            {children}
        </button>)
}

export default Button;