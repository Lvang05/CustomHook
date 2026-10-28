
import useToggle from "../hooks/useToggle"
import useFetch from "../hooks/useFetch"
import useOnlineStatus from "../hooks/useOnlineStatus"

const modalStyles = {
    backgroundColor: '#fff',
    padding: '20px',
    border: '1px solid #ccc',
    maxWidth: '500px'
}

const Modal = () => {
    const url = 'https://swapi.dev/api/films/1'
    const { data, loading, error } = useFetch(url)
    const [ isOpen, open, close, toggle ] = useToggle()
    const isOnline = useOnlineStatus()

    return (
        <div>
            <p>Status: {isOnline? 'Online' : 'Offline'}</p>
            <button onClick={open}>Open Modal</button>
            <button onClick={toggle}>Toggle Modal</button>
            {isOpen && (
                <div style={modalStyles}>
                    <h2>My Content</h2>
                    {data && data.opening_crawl}
                    {loading && 'Loading movie info...'}
                    {error && error}
                    <button onClick={close}>Close Modal</button>
                </div>
            )}
        </div>
    )
}

export default Modal
