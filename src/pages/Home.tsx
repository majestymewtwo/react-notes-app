import axios from "axios";
import AddNote from "../components/AddNote";
import Navbar from "../components/Navbar";
import Note from "../components/Note";
import { UserContext } from "../context/context";
import { useContext, useEffect, useState } from "react";

interface Label {
  id: string;
  name: string;
}
interface Note {
  id: string;
  title: string;
  content: string;
  labels: Label[];
  pinned: boolean;
}

function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const context = useContext(UserContext);

  const handleNotesChange = (status: boolean) => {
    if (status) getNotes();
  };

  const getNotes = async () => {
    axios
      .get("http://localhost:8080/api/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (context.isLoggedIn) {
      getNotes();
    }
  }, []);

  return (
    <section className='min-h-screen'>
      <Navbar />
      <div className='p-4 space-y-8'>
        <AddNote status={handleNotesChange} />
        {/* Pinned Notes */}
        <div className='flex flex-wrap justify-center'>
          {notes.map((note: Note, index) => {
            if (note.pinned) {
              return (
                <Note
                  key={index}
                  title={note.title}
                  content={note.content}
                  id={note.id}
                  pinned={note.pinned}
                  labels={note.labels}
                  status={handleNotesChange}
                />
              );
            }
          })}
        </div>
        {/* Unpinned Notes */}
        <div className='flex flex-wrap justify-center'>
          {notes.map((note: Note, index) => {
            if (!note.pinned) {
              return (
                <Note
                  key={index}
                  title={note.title}
                  content={note.content}
                  id={note.id}
                  pinned={note.pinned}
                  labels={note.labels}
                  status={handleNotesChange}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
