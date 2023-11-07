import { useEffect, useState } from "react";
import { createComment } from "../../services/requests";
import { AutorComentario, BotaoCondicional, ComentarioContainer, ComentarioDoAutor, ContainerCurtir, ContainerItem, InputComentar } from "./style";
import Curtir from "../Curtir/Curtir";


const Comentar = () => {

   const [novoComentario, setNovoComentario] = useState('')
   const [comentarios, setNovoComentario] = useState([])
   const [mostrarComentarios, setMostrarComentarios] = useState(false)

   const adcionarComentario = ()=>{
    if(novoComentario.trim() !== ''){
        createComment(postId, novoComentario)
        setNovoComentarios(...customElements, novoComentario)
        setNovoComentario('')
    }
   }

   useEffect(()=>{
    adicionarComentario()
   },[])

   const novosComentario = comments.map((comentario)=>{
            return(<ComentarioContainer key={comentario.comment_id}>
                <AutorComentario>{comentario.creator_name}:
                </AutorComentario>
                <ComentarioDoAutor>{comentario.comment}
                </ComentarioDoAutor>
            </ComentarioContainer>)
   })

    return (

        <>
            <ContainerItem>
                <BotaoCondicional onClick={()=> setMostrarComentarios
                (!mostarComentarios)}>
                    {mostrarComentarios ? ('Fechar') : ('Comentar')}
                </BotaoCondicional>
                {mostrarComentarios && (
                    <ContainerCurtir>
                        <div>
                            <InputComentar
                                placeholder="comentario"
                                value= {novoComentario}
                                onChange = {(e)=>setNovoComentario(e.target.value)}
                            />
                            <button onClick={adicionarComentario}>Enviar</button>
                        </div>
                        {novosComentario}
                    </ContainerCurtir>
                )}
            </ContainerItem>
         
             

            
        </>
    )
}

export default Comentar