import React, { useContext } from "react";
import { useEffect } from "react";
import Son from "./Son";
import Context from "./Context";

function Father() {

    const ctx = useContext(Context);
    const gifts = ["car", "house", "money"];
    useEffect(() => {
        ctx.setGifts(gifts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Son />
        </div>
    );
}


export default Father;