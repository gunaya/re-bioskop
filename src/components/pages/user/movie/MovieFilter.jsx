import React, {useRef} from 'react'

export default function MovieFilter({onFiltered}) {
    const filterRef = useRef()

    const onBtnClick = () => {
        const filter = filterRef.current.value
        // if (filter === '') return
        onFiltered(filter)
    }

    const onKeyPressed = (event) => {
        if (event.key === 'Enter') {
            const filter = filterRef.current.value
            // if (filter === '') return
            onFiltered(filter)
        }
    }

    return (
        <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <input type="text" placeholder="Search a movie ..." ref={filterRef} onKeyPress={onKeyPressed}
                className="px-3 py-3 placeholder-black text-black relative bg-secondary-light rounded-md text-sm shadow outline-none 
                focus:outline-none focus:shadow-outline w-full pr-10"/>
            <button className="z-10 h-full leading-snug font-normal text-center text-secondar absolute bg-transparent rounded text-base 
                focus:outline-none items-center justify-center w-10 right-0 py-3" onClick={onBtnClick}>
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}
