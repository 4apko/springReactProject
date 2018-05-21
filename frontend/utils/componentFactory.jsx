import React from 'react'

import Input from 'arui-feather/input'

const renderFieldComponent = function (type, props) {

    let commonProps = {
        size: 'm',
        autocomplete: false,
        width: 'available',
        error: (props.meta.touched || props.meta.dirty) && props.meta.error
    };

    let resultProps = { ...props, ...props.input, ...commonProps };

    switch (type) {
        case 'input':
            return <Input { ...resultProps } />;

        default:
            return false;
    }
};

export function inputField(props) {
    return renderFieldComponent('input', props);
}