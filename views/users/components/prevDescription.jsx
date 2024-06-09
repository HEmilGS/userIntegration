const PrevDescription = ({ descriptions }) => {
  return (
    <div className="flex flex-row flex-wrap items-end overflow-x-scroll flex-shrink-0 h-full">
      {descriptions?.map((des, idx) => (
        <div key={idx} className="w-[32rem] h-[12rem] m-2 overflow-y-scroll flex justify-start items-center flex-col bg-slate-300 rounded-xl">
          <h1 className="mt-2 font-medium">Description</h1>
          <p>{des.description}</p>
          <h1 className="mt-2 font-medium">Prescription:</h1>
          <p>{des.prescription}</p>x
        </div>
      ))}
    </div>
  );
};

export default PrevDescription;
