import React from 'react'

const OutputCard = ({ cardTitle, cardDetail, htmlPId }) => {
    return (
        <>
            <div className="max-w-xs m-4 bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                    <h3 className="text-lg font-bold">{cardTitle}:</h3>
                    <p id={htmlPId} className="text-lg">
                        {cardDetail}
                    </p>
                </div>
            </div>
        </>
    )
}

export default OutputCard;