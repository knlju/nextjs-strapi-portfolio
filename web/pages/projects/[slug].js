import {Layout} from "@/components/Layout";
import {API_URL} from "@/config";
import Project from "@/components/Project";

const Slug = ({project}) => {
  return (
    <Layout>
      <Project project={project} />
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`)
  const projects = await res.json()

  return {
    props: {
      project: projects.data[0],
    },
  }
}

export default Slug