
import { useState, useEffect } from 'react'

const useFetch = url => {
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const response = await fetch(url)
            setLoading(false)

            if (!response.ok) {
                setError(`Error: ${response.status}`)
                return
            }

            const json = await response.json()
            setData(json)
        })()
    }, [ url ])

    return { data, loading, error }
}

export default useFetch
