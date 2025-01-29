import {GridElements as Links} from "./grid_element.jsx";

export function Grid() {
  return (
    <>
      <div className="mt-4 p-2 flex justify-center items-center">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Links
            title="Documents"
            discription="Find in-depth information about React.js features and API."
            source="https://react.dev/reference/react"
          />
          <Links
            title="Learn"
            discription="Learn about React.js in an interactive course with quizzes."
            source="https://react-tutorial.app/"
          />
          <Links
            title="Examples"
            discription="Discover and deploy boilerplate example React.js projects."
            source="https://www.w3schools.com/REACT/DEFAULT.ASP"
          />
          <Links
            title="Deploy"
            discription="Instantly deploy your React.js site to a public URL with Vercel."
            source="https://vercel.com/"
          />
        </div>
      </div>
    </>
  );
}
