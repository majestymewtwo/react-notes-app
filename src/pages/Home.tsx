import axios from "axios";
import AddNote from "../components/AddNote";
import Navbar from "../components/Navbar";
import Note from "../components/Note";
import { UserContext } from "../context/context";
import { useContext, useEffect, useState } from "react";

interface Label {
  name: string;
}
interface Note {
  title: string;
  content: string;
  labels: Label[];
  pinned: boolean;
}

function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const context = useContext(UserContext);

  const handleAddNote = (status: boolean) => {
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
      <div className='p-4 space-y-10'>
        <AddNote status={handleAddNote} />
        <div className='flex flex-wrap justify-center'>
          {notes.map((note, index) => (
            <Note key={index} title={note.title} content={note.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
