import React from 'react';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest}) {
    return <Button className={`Button${size}${color}${outline}${fullWidth}`} {...rest}>{children}</Button>;
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;  