interface LabelProps {
  name: string;
}

function NoteLabel({ name }: LabelProps) {
  return (
    <div className='bg-slate-500 w-fit p-1 text-xs rounded-lg text-white m-1 flex items-center'>
      <h1>{name}</h1>
    </div>
  );
}
export default NoteLabel;
