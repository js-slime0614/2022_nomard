import React from 'react';
import './Button.scss';

function Button({ children, size }) {
    return <Button className={`Button${size}`}>{children}</Button>;
}

Button.defaultProps = {
    size: 'medium'
};

export default Button;  