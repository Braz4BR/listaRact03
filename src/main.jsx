import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Agentes from './components/ListaDinamicaMap.jsx'
import Pai from './components/Filho.jsx'
import Resposta from './components/Boleano.jsx'
import Nomes from './components/Tabela.jsx'
import Imagem from './components/Urls.jsx'
import Texto from './components/RenderDinamic.jsx'
import Remover from './components/RenderList.jsx'
import Elementos from './components/Frag.jsx'
import ChildrenComp from './components/RenderChildren.jsx'
import ImagemAlt from './components/ImgDinamic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Agentes/>
    <Pai/>
    <Resposta msg={true}/>
    <Nomes/>
    <Imagem/>
    <Texto boolean={true}/>
    <Remover/>
    <ChildrenComp>
          <h2>Título</h2>
          <p>Parágrafo do cartao</p>
          <p>Isso aqui está sendo renderizado na children.</p>
    </ChildrenComp>
    <Elementos/>
    <ImagemAlt/>
  </StrictMode>
)
