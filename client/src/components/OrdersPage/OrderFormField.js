import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const OrderFormField = ({
    name, placeholder, value, error, onChange, type, info
}) => {
    return (
        <div>
            <div className = "form-group">
                <input
                    type={type}
                    className = {classnames('form-control form-control-lg', {'is-valid': error})}
                    placeholder = {placeholder}
                    name = {name}
                    value = {value}
                    onChange = {onChange}
                
                />
                {info && <small className = "form-text text-muted">{info}</small>}
                {error && (<div className = "invalid-feedback">{error}</div>)}
            </div>
        </div>
    )
}

OrderFormField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    info: PropTypes.string
}

export default OrderFormField;