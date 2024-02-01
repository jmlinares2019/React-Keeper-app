import React, {useState} from "react";

// Material UI components
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

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

    const [isExpanded, setExpanded] = useState(false);
    function expandArea(){
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
            {/* Only show title when clicking on textarea */}
                {isExpanded? 
                <input 
                    name="title" 
                    placeholder="Title" 
                    onChange={handleChange} 
                    value={note.title}/>
                : null}
                <textarea 
                    name="content" 
                    placeholder="Take a note..."
                    rows={isExpanded? 3 : 1} 
                    onChange={handleChange}
                    onClick={expandArea}
                    value={note.content}/>
                {/* Pass the new note back to the App. */}
                {/* Only showing the button when textarea expands */}
                <Zoom in={isExpanded}>
                    <Fab onClick={function(e){
                        // preventing page reload
                        e.preventDefault();
                        // calling newNote fn passing 'note' as argument
                        props.onAdd(note);
                        // clearing Create area inputs
                        setNote({
                            title: "",
                            content: ""
                        });
                        setExpanded(false);
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
