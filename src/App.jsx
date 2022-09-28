import './App.css'

import Verificar from './components/Verificar'
import Error from './components/Error'

function App() {

  var random = 0
  var frases = [{
      frase: "No meio da dificuldade encontra-se a oportunidade.",
      autor: "Albert Einstein"
    },
    {
      frase: "É parte da cura o desejo de ser curado.",
      autor: "Sêneca"
    },
    {
      frase: "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
      autor: "Henry Ford"
    },
    {
      frase: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
      autor: "Desconhecido"
    },
    {
      frase: "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
      autor: "Roberto Shinyashiki"
    },
    {
      frase: "Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.",
      autor: "Frank Tibolt"
    },
    {
      frase: "Não importa que você vá devagar, contanto que você não pare.",
      autor: "Confúcio"
    },
    {
      frase: "A inspiração existe, porém temos que encontrá-la trabalhando.",
      autor: "Pablo Picasso"
    },
    {
      frase: "Coragem é saber o que não temer.",
      autor: "Platão"
    },
    {
      frase: "Conhecer a si mesmo é o começo de toda sabedoria.",
      autor: "Aristóteles"
    },
    {
      frase: "Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.",
      autor: "Ellen DeGeneres"
    },
    {
      frase: "Acredite em milagres, mas não dependa deles.",
      autor: "Immanuel Kant"
    },
    {
      frase: "Não é a carga que o derruba, mas a maneira como você a carrega.",
      autor: "Lou Holtz"
    },
    {
      frase: "Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.",
      autor: "Paulo Coelho"
    },
    {
      frase: "Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.",
      autor: "Paulo Coelho"
    }]


  function cadastrar(){
    var frase = document.getElementById("frase").value
    var autor = document.getElementById("autor").value
    if(frase == ""){
      document.getElementById("error").style.display = "block"
    } else{
      if(autor == ""){
        autor = "Desconhecido"
      }
      var fraseadd = {"nome": frase, "autor": autor}
      frases.push(fraseadd)
      document.getElementById("verificar").style.display = "block"
      document.getElementById("frase").value = ""
    }

    console.log(frases)
  }

  function visualizar(){
    random = Math.floor(Math.random() * frases.length);
    console.log(random)
    console.log(frases[random])

    var randomatual = random
    random = Math.floor(Math.random() * frases.length);
    if (randomatual == random){
      random = Math.floor(Math.random() * frases.length);
    }else{
      var resul_frase = document.getElementById("resultado_frase")
      resul_frase.innerHTML= frases[random].frase;
      var resul_autor = document.getElementById("resultado_autor")
      resul_autor.innerHTML= frases[random].autor;
    }
    
   
  }


  return (
    <div className="App">

      <Error />
      <Verificar />
      <p className="title"> Digite sua frase Motivacional!</p>
      <input type="text" id="frase" placeholder="Frase:" />
      <input type="text" id="autor" placeholder="Autor: (O autor será desconhecido se não for informado.) " />

      <div className="linha">
        <button id="cadastrar" onClick={cadastrar} className="butto"> Cadastrar </button>
        <button id="visualizar" onClick={visualizar} className="butto"> Visualizar </button>
      </div>

      <p id="resultado_frase"></p>
      <p id="resultado_autor"></p>
    </div>
  )
}

export default App
