import { useLoaderData } from "react-router-dom"

function GitHub() {

  // const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/okrayum")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     setData(data)
  //   })
  // }, [])

  const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      GitHub repos: {data.public_repos}
      <img src={data.avatar_url} width={300} alt="my avatar" />
      </div>
  )
}

export default GitHub

// eslint-disable-next-line react-refresh/only-export-components
export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/okrayum");
  return response.json();
}