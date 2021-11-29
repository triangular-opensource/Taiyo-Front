import React from 'react'

function CustomText(props) {

    return (
            <div style={{
                fontSize:22,
                fontWeight:'bold'
            }}>
                {props.name}
            </div>
    )
}
export default CustomText
