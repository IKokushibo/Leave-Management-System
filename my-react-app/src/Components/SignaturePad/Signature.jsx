import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const Signature = ({ onSave }) => {
    const sigCanvas = useRef(null);

    const clear = () => {
        sigCanvas.current.clear();

    };

    const save = () => {
        // Get the image data as a base64 string
        const dataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
        onSave(dataUrl); // Pass the data URL to the parent component or send to backend
    };

    return (
        <div>
            <div className="w-fit border-1px border-gray-200">
                <SignatureCanvas
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{ width: 400, height: 200, className: "sigCanvas" }}
                />
            </div>

            <div className="mt-2 flex space-x-4">

                <button type="button" onClick={clear} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">Clear</button>
                <button type="button" onClick={save} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md">Save</button>
            </div>
        </div>
    );
};

export default Signature;
