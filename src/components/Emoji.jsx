import React from 'react';
/*
How works Emoji Component:
It takes two props: label and symbol.
Symbol is the emoji that we want to print. Just copy and paste.
Label is there for security. When it is present it generates an aria-label 
that will be read by the browser. If it is empty, aria-hidden will be true and 
it will not be rendered.
Basically this is so if there is some problem and the emoji does not add anything, 
so that the browser simply ignores it. 
*/



const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);
export default Emoji;