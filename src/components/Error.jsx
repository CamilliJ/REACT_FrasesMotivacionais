function Error() {

    function fechar() {
        document.getElementById("error").style.display = "none"
    }
    
    return (
        <div id="error">
            <img src="botao-x.png" alt="" className="img-error" />
            <p className="error">ERRO</p>
            <p className="msg">Para cadastrar você precisar colocar uma frase!</p>

            <button id="fechar" onClick={fechar} className="butto-ok"> OK</button>
        </div>
    )


}

export default Error