import { useOutletContext } from "react-router-dom"

export default function ProjectSingle() {

  const [getProject, setGetProject] = useOutletContext()
  console.log('SINGLE', getProject)

  const projectInfo = getProject

  return (
    <>
      <h1>Hello - SINGLE PROJECT</h1>
      <div>{projectInfo.title}</div>
      {/* {projectInfo.map(project => {
        const { id, title } = project
        return (
          <h2 key={id}>{title}</h2>
        )
      } */}

      {/* )} */}
    </>
  )
}