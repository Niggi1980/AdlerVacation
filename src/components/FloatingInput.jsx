import React from 'react'

export default function FloatingInput({placeholder, inputFunction}) {
    return (
        <div className="form-floating customFloatingInput">
            <textarea onChange={(event)=>inputFunction(event)} className="form-control popupInput" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">{placeholder}</label>
        </div>
    )
}
