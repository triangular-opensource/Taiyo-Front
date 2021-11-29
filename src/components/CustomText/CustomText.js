import React from 'react'

function CustomText(props) 
{
    return (
            <div style={{
                fontSize: props.size,
                fontWeight: props.weight
            }}>
                {props.name}
            </div>
    )
}
export default CustomText
