import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    // Add new note to an array.
    const [notes, addNote] = useState([])
    function newNote(note){
        addNote(function(prevNotes){
            return [...prevNotes, note]
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
                        title={note.title}
                        content={note.content} 
                    />
                    )
            })}
            <Footer />
        </div>
    );
}

export default App;
