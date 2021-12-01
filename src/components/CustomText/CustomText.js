import React from 'react'

function CustomText(props) 
{
    return (
            <div style={{
                color:props.color,
                fontSize: props.size,
                fontWeight: props.weight
            }}>
                {props.name}
            </div>
    )
}
export default CustomText
