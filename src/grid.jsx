
export function Grid() {
  return (
    <>
      <div className="mt-4 p-2 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <GridElements
            title="Documents"
            discription="Find in-depth information about React.js features and API."
            source="https://react.dev/reference/react"
          />
          <GridElements
            title="Learn"
            discription="Learn about React.js in an interactive course with quizzes."
            source="https://react-tutorial.app/"
          />
          <GridElements
            title="Examples"
            discription="Discover and deploy boilerplate example React.js projects."
            source="https://www.w3schools.com/REACT/DEFAULT.ASP"
          />
          <GridElements
            title="Deploy"
            discription="Instantly deploy your React.js site to a public URL with Vercel."
            source="https://vercel.com/"
          />
        </div>
      </div>
    </>
  );
}


export function GridElements({ title, discription, source }) {
  return (
    <>
      <div className="p-2 border border-gray-400 rounded-[4px] w-[280px] shadow-lg hover:shadow-xl transition-shadow duration-200">
        <div>
          <a href={source} className="py-1 px-2 flex items-center gap-1 font-bold hover:bg-gray-200 w-[fit-content] transition-all rounded-[4px]">
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