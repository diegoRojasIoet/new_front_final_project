import React from 'react'

interface Todo {
    text: string;
    completed: boolean;
}

function useLocalStorage(itemName: string, initialValue: Todo[]) {
    const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);

                }
                setItem(parsedItem);
                setLoading(false);
                setSincronizedItem(true)

            } catch (error) {
                setError(true);
            }

        }, 1000)
    }, [sincronizedItem])




    const savedLocalTodoList = (newItem: any) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem))
            setItem(newItem);
        } catch (error) {
            setError(true);
        }
    }
    return {
        item,
        savedLocalTodoList,
        loading,
        error,
        setSincronizedItem
    }
}
export { useLocalStorage }
