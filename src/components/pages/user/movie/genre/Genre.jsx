import React from 'react'

export default function Genre( props ) {
    const { genre } = props;

    return (
        <div className="bg-primary-dark p-1 px-2 mr-2 rounded-full h-auto flex justify-center">
            <span className="text-secondary-default text-sm items-center">{genre}</span>
        </div>
    )
}
