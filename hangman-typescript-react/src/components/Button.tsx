
function Button(props : {
    backgroundColor: string
}) {
    const { backgroundColor } = props
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Click me
        </button>
    )
}

export default Button;