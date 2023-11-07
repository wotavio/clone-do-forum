import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';

function Card() {

 const [loading, setLoading] = useState(true)
 const [forumTopics, setForumTopics] = useState([])
 const [SelectedPostId] = useContext(GlobalStateContect)

 useEffect(()=>{
  getPostAll(setForumTopics)
 },[])
 
  return (
    <>
    {SelectedPostId ? (
      forumTopics.filter((titulo)=>{
        titulo.post_tittle.toLowerCase()
        .includes(SelectedPostId.toLowerCase())
        .map((item)=>{
          <div key={item.post.id}>
            <CardStyle>
              <ImgCard src=''/>
              <NomeCard>{item.creator_username}</NomeCard>
              <MensagemCard>{item.post_created_at}</MensagemCard>

              <TituloCard>{item.post_tittle}</TituloCard>
              <ImgPost src={item.post_image} alt='foto post'/>

              <CardPost>
                <ConteudoCard>{item.post_content}</ConteudoCard>
              </CardPost>
            </CardStyle>
          </div>
        })
      })
    ):(
      <ContainerCardHome>
      {loading ? (
        <ContainerCard>
          {forumTopics && forumTopics.map(dado=>(
            <CardStyle key={dado.post_id}>
              <PerfilUsuario>
                <ImgCard src='' alt='foto de perfil'/>
                <ContainerPerfil>
                  <NomeCard>{dado.creator_username}</NomeCard>
                  <MensagemCard>{dado.post_created_at}</MensagemCard>
                </ContainerPerfil>
              </PerfilUsuario>

              <TituloCard>{dado.post_tittle}</TituloCard>
              <CardPost>
                <ImgPost src={dado.post_image} alt='foto post'/>
                <ConteudoCard>{dado.post_content}</ConteudoCard>
              </CardPost>

              <EditPost>
                <Comentar
                  postId={dado.post_id}
                  comments={dado.comments}
                  autorId={dado.creator_id}
                />
              </EditPost>
            </CardStyle>
          ))}
        </ContainerCard>):
        (<p>loading...</p>)}
      </ContainerCardHome>
    )
  }


   


    </>
  )
}

export default Card