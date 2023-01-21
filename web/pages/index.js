import {Layout} from "@/components/Layout";
import {API_URL} from "@/config";
import Projects from "@/components/Projects";

export default function Home({projects}) {
  console.log(projects)
  return (
    <Layout>
      test
      <div>
        <Projects projects={projects} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/projects?populate=*`)
  const projects = await res.json()
  return {
    props: {
      projects: projects.data
    }
  }
}