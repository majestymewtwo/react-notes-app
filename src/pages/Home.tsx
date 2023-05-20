import AddNote from "../components/AddNote";
import Navbar from "../components/Navbar";
import Note from "../components/Note";

function Home() {
  const notes = [
    {
      title: "Heading 1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, repellat id! Suscipit, qui. Commodi beatae minima exercitationem maiores vero, sapiente soluta ipsa debitis, dicta vel pariatur officia saepe, culpa iusto adipisci fugiat. Adipisci cum obcaecati odio nostrum explicabo ab minima, maxime maiores in illum nulla pariatur quia temporibus dolor corporis",
    },
    {
      title: "Heading 2",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, doloremque vero! Quae error odit, impedit consequuntur reprehenderit labore, eius itaque molestias harum suscipit, rerum voluptatem ullam. Enim culpa neque eaque.",
    },
    {
      title: "Heading 1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, repellat id! Suscipit, qui. Commodi beatae minima exercitationem maiores vero, sapiente soluta ipsa debitis, dicta vel pariatur officia saepe, culpa iusto adipisci fugiat. Adipisci cum obcaecati odio nostrum explicabo ab minima, maxime maiores in illum nulla pariatur quia temporibus dolor corporis",
    },
    {
      title: "Heading 2",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, doloremque vero! Quae error odit, impedit consequuntur reprehenderit labore, eius itaque molestias harum suscipit, rerum voluptatem ullam. Enim culpa neque eaque.",
    },
    {
      title: "Heading 1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, repellat id! Suscipit, qui. Commodi beatae minima exercitationem maiores vero, sapiente soluta ipsa debitis, dicta vel pariatur officia saepe, culpa iusto adipisci fugiat. Adipisci cum obcaecati odio nostrum explicabo ab minima, maxime maiores in illum nulla pariatur quia temporibus dolor corporis",
    },
    {
      title: "Heading 2",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, doloremque vero! Quae error odit, impedit consequuntur reprehenderit labore, eius itaque molestias harum suscipit, rerum voluptatem ullam. Enim culpa neque eaque.",
    },
    {
      title: "Heading 1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, repellat id! Suscipit, qui. Commodi beatae minima exercitationem maiores vero, sapiente soluta ipsa debitis, dicta vel pariatur officia saepe, culpa iusto adipisci fugiat. Adipisci cum obcaecati odio nostrum explicabo ab minima, maxime maiores in illum nulla pariatur quia temporibus dolor corporis",
    },
    {
      title: "Heading 2",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, doloremque vero! Quae error odit, impedit consequuntur reprehenderit labore, eius itaque molestias harum suscipit, rerum voluptatem ullam. Enim culpa neque eaque.",
    },
    {
      title: "Heading 1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, repellat id! Suscipit, qui. Commodi beatae minima exercitationem maiores vero, sapiente soluta ipsa debitis, dicta vel pariatur officia saepe, culpa iusto adipisci fugiat. Adipisci cum obcaecati odio nostrum explicabo ab minima, maxime maiores in illum nulla pariatur quia temporibus dolor corporis",
    },
    {
      title: "Heading 2",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, doloremque vero! Quae error odit, impedit consequuntur reprehenderit labore, eius itaque molestias harum suscipit, rerum voluptatem ullam. Enim culpa neque eaque.",
    },
  ];
  
  return (
    <section className='min-h-screen'>
      <Navbar />
      <div className='p-4 space-y-10'>
        <AddNote />
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
