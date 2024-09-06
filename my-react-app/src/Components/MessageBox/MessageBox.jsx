function MessageBox(props) {

    return (
        <>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-auto flex justify-center rounded-md pt-7 pb-7 items-center bg-bg3 flex-col gap-4">
                    <p className="text-white">{props.message}</p>
                    <button className="bg-white w-16 rounded-md h-8" onClick={props.action}>Ok</button>
                </div>
            </div>
        </>
    )
}

export default MessageBox;