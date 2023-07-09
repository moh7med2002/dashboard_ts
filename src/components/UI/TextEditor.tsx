import React, { useRef,SetStateAction, Dispatch,useMemo,useCallback } from 'react'
import JoditEditor from 'jodit-react';


function TextEditor() {
    const editor = useRef(null);

	const config = useMemo(() => ({
        readonly: false,
        addNewLineOnDBLClick: true,
        placeholder:'Product description'
    }), []);

  
    
    return (
        <>
            <JoditEditor
			ref={editor}
			config={config}
            value=''
		    />
        </>
    )
}


export default React.memo(TextEditor)