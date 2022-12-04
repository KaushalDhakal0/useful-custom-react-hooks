import useClippy from "use-clippy"

export default function Component() {
    const [ clipboard, setClipboard ] = useClippy();

    return (
        <div>
            <div>Clipboard</div>
            <div>{clipboard}</div>

            <button onClick={() => setClipboard("Any test you want to copy to clipBoard.")}>Set Clipboard</button>
        </div>
    )
}