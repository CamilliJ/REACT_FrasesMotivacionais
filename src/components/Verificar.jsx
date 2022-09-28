function Verificar() {


    function fecharsucesso(){
        document.getElementById("verificar").style.display = "none"
      }
    return (
        <div id="verificar">
            <img src="verificar.png" alt="" className="img-error" />
            <p className="sucesso">SUCESSO</p>
            <p className="msg">Cadastro realizado com sucesso!</p>
            <button id="fecharsucesso" onClick={fecharsucesso} className="butto-ok"> OK</button>
        </div>
    )
}


export default Verificar