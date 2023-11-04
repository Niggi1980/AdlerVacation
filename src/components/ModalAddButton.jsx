import React, { useState } from 'react'
import FloatingInput from './FloatingInput'
import "../css/addButton.css"

export default function ModalAddButton({ handleFunction, title, placeholder }) {
    const [vacationName, setVacationName] = useState();

    function handleInput(event) {
        setVacationName(event.target.value)
    }
    return (
        <div>
            <button type="button" className="btn btn-primary addButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <p className='addButtonSymbol'>+</p>
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <FloatingInput inputFunction={handleInput}  className="" placeholder={placeholder}></FloatingInput>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>
                            <button onClick={() => handleFunction(vacationName)} type="button" className="btn btn-primary" data-bs-dismiss="modal" >Hinzufügen </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
