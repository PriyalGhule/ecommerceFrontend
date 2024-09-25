import { useAuth } from "../store/auth"
import books from '../images/books.jpg'

export const Home=()=>{
    const {user}=useAuth();
    return <div className="flex m-8">
    <div className=" flex flex-1 flex-column">
        <div>
    <h1 className=" text-white-400 text-4xl font-bold">Welcome {user?`${user.name} to our website`:"to our website"}
    
    </h1>
   <p className="m-5"> Lorem ipsum dolor sit amet. Qui officiis fuga sit autem labore nam voluptatum error. In dolorem eius est possimus quaerat qui eligendi ullam et amet quasi sed laboriosam consequatur non saepe iste rem dolor omnis.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum similique repellat molestiae! Alias, libero quidem saepe quas minima facilis facere cum nesciunt officia ex recusandae obcaecati natus aliquid numquam eius.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda recusandae numquam ducimus iste fuga, odio, vitae inventore neque quidem placeat qui enim aperiam dolore eligendi temporibus expedita repudiandae unde perferendis.
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque illo aliquid temporibus, pariatur eveniet possimus laborum at voluptates, quaerat odit autem in incidunt iusto laudantium adipisci quibusdam! Temporibus, delectus reiciendis?
   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit est sequi similique tenetur! Expedita totam velit consequatur natus soluta pariatur reiciendis incidunt tempora officiis earum, enim fugiat rerum ea dignissimos.
   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos ab velit labore optio architecto fugiat cum suscipit repellendus, quae, et tempore! Cum autem incidunt veniam voluptatibus deleniti perferendis sapiente?
   
    </p>
    </div></div>
    <img src={books} className="w-1/5">

    </img>
    </div>
}