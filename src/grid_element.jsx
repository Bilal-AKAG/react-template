export  function GridElements({ title, discription ,source}) {
  return (
    <>
      <div className="p-2 border border-gray-400 rounded-[4px] w-[280px]">
        <div>
          <a href={source} className="p-1 flex items-center gap-1 font-bold">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="14px"
              fill="#000000"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </a>
        </div>
        <p className="p-1">{discription}</p>
      </div>
    </>
  );
}