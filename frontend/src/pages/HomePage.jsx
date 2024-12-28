import { useAuth } from "../context/AuthContext"
import {Card} from "../Components/ui"
function HomePage() {

  const data = useAuth()
  console.log(data)
  
  return (
    <div>

    <Card>
      <h1 className="text-3xl font-bold my-4">Home Page</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita aliquam similique distinctio tempora quasi possimus necessitatibus reiciendis optio autem, eveniet soluta incidunt! Ratione aperiam quam quidem, pariatur obcaecati architecto
        !</p>
    </Card>

    </div>
  )
}

export default HomePage