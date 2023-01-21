import {API_URL} from "@/config";

export default function Projects({projects}) {
  console.log({projects})
  return (
    <div>
      {projects?.map(pr => <Project project={pr} key={pr.id}/>)}
    </div>
  )
}

export function Project({project}) {
  const {attributes} = project
  return (
    <div>
      <div>
        {attributes.name}
      </div>
      <div>
        {attributes.description}
      </div>
      <div>
        {attributes.technologies}
      </div>
      <div>
        {attributes.slug}
      </div>
      <img
        src={`${API_URL}${attributes.preview.data[0].attributes.url}`}
        alt={attributes.description}
      />
    </div>
  )
}