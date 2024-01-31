import React, {useState} from "react";

function CreateArea(props) {
    // Create a constant that keeps track of the title and content.
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    function handleChange(e){
        const { name, value } = e.target;
        setNote(function(prevValues){        
            if(name === "title"){
                return {
                    title: value,
                    content: prevValues.content
                } 
            } else if(name === "content"){
                return {
                    title: prevValues.title,
                    content: value
                }
            }
        });
    }

    return (
        <div>
            <form>
                <input 
                    name="title" 
                    placeholder="Title" 
                    onChange={handleChange} 
                    value={note.title}/>
                <textarea 
                    name="content" 
                    placeholder="Take a note..." 
                    rows="3" 
                    onChange={handleChange} 
                    value={note.content}/>
                {/* Pass the new note back to the App. */}
                <button onClick={function(e){
                    // preventing page reload
                    e.preventDefault();
                    // calling newNote fn passing 'note' as argument
                    props.onAdd(note);
                    // clearing Create area inputs
                    setNote({
                        title: "",
                        content: ""
                    });
                }}>
                Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
