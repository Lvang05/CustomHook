
import { useState } from 'react'

const useToggle = (initalstate = true) => {
    const [ value, setValue ] = useState(initalstate)

    const setTrue = () => setValue(true)
    const setFalse = () => setValue(false)
    const toggle = () => setValue(prev => !prev)

    return [ value, setTrue, setFalse, toggle ]
}

export default useToggle
