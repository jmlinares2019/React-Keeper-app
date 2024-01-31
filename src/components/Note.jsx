import React from "react";

function Note(props) {

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            {/* Callback from the Note component to trigger a delete function. */}
            <button onClick={function(){
                // pass id (using index) back to the App when deleting.
                props.onDelete(props.index);
            }}>
                DELETE
            </button>
        </div>
    );
}

export default Note;
