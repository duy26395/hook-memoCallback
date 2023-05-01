import { Fragment,memo } from "react";
function Context({ onIncreae }) {

    console.log("re");
    return (
        <Fragment>
            <button onClick={onIncreae}>
                click me
            </button>
            <h1>
                hello
            </h1>
        </Fragment>
    )
}

export default memo(Context);