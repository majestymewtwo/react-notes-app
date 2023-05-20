interface NoteProps {
    title : string,
    content : string
}
function Note({title, content} : NoteProps) {
  return (
    <div className='w-56 border space-y-4 border-slate-300 rounded-md p-4 mx-4 my-6 bg-[#f8f8f8] h-fit'>
      <h1>{title}</h1>
      <p>
        {content}
      </p>
    </div>
  );
}
export default Note;
