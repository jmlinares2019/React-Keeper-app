import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    
    const [notes, setNotes] = useState([])

    // Add new note to notes array.
    function newNote(note){
        setNotes(function(prevNotes){
            return [...prevNotes, note]
        });
    }

    // Remove note from notes array
    function deleteNote(id){
        setNotes(function(prevNotes){
            // Using filter fn to filter out the item to be deleted.
            return prevNotes.filter(function(item, index){
                return index !== id;
            });
        });

    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={newNote} />
            {/* Take array and render seperate Note components for each item. */}
            {notes.map(function(note, index){
                return (
                    <Note 
                        key={index}
                        // Pass a id over to the Note component
                        index={index}
                        title={note.title}
                        content={note.content} 
                        onDelete={deleteNote}
                    />
                    )
            })}
            <Footer />
        </div>
    );
}

export default App;
