import React, {useState} from "react";

function CreateArea(props) {
    // Create a constant that keeps track of the title and content.
    const [newNote, setNewNote] = useState({
        title: "",
        content: "",
    });
    function handleChange(e){
        const { name, value } = e.target;
        setNewNote(function(prevValues){        
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
                    value={newNote.title}/>
                <textarea 
                    name="content" 
                    placeholder="Take a note..." 
                    rows="3" 
                    onChange={handleChange} 
                    value={newNote.content}/>
                {/* Pass the new note back to the App. */}
                <button onClick={function(e){
                    e.preventDefault();
                    props.onAdd(newNote);
                    setNewNote({
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
