
const arr = [
    {id: "1", name: "test1"},
    {id: "2", name: "test2"},
    {id: "1", name: "test3"},
    {id: "3", name: "test4"},
    {id: "2", name: "test5"},
    {id: "4", name: "test6"},
]

// Funcion que quita duplicados de un array, recibe el array y el valor que no se debe repetir
export const filteredValueArray = (array, value) => {
    return array.reduce((acc, current) => {
        const x = acc.find(item => item[`${value}`] === current[`${value}`])
        if (!x) {
            return acc.concat([current])
        } else {
            return acc
        }
    }, [])
}
