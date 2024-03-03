import React from 'react'

function withStorageListener(WrapedComponent: any) {
    return function WrappedComponentWithStorageListener(props: any) {

        const [storageChange, setStorageChange] = React.useState(false);

        const sincronizeTodos = (e: any) => {
            console.log(e)
            if (e.key === 'TODOS_V1') {
                localStorage.setItem('TODOS_V1', e.newValue);
                setStorageChange(true);
                props.setSincronizedItem(storageChange)
            }
        }

        React.useEffect(() => {
            window.addEventListener('storage', sincronizeTodos)
            return () => {
                window.removeEventListener('storage', sincronizeTodos)
            }

        }, [])


        return (
            <WrapedComponent
                show={storageChange}
                toggleShow={setStorageChange}
            >

            </WrapedComponent>
        )
    }

}

export { withStorageListener }