import React from 'react';
import { Fragment } from 'react';

import './Checkbox.scss';

const Checkbox = (props) => {

    return (
        <Fragment>
            <div className="checkbox">
                <input type="checkbox" 
                    {...props}
                />
                <label className="checkmark">{props.title}</label>
            </div>
        </Fragment>
    );
}

export default Checkbox;