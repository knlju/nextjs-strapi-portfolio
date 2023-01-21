import Project from "@/components/Project";

export default function Projects({projects}) {
  return (
    <div>
      {projects?.map(pr => <Project project={pr} key={pr.id}/>)}
    </div>
  )
}
