import { useIdb } from "react-use-idb"

export default function IndexedDb() {
    const [ user, setUser ] = useIdb("user", { name: "nnamdi", age: 27 })

    return (
        <div>
            <div> 
                User:
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
            </div>
            <button onClick={() => setUser({...user, age: 26})}></button>
        </div>
    )
}