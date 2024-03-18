import * as React from 'react';

export const ContactPhoneLink = () => {
    const contactNumber = 999999999;

    return (<a href={`tel:${contactNumber}`}>{contactNumber}</a>);
}