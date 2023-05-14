function paginar(id){
    document.getElementById('pag1').classList.remove('active')
    document.getElementById('pag2').classList.remove('active')
    document.getElementById('pag3').classList.remove('active')
    document.getElementById(id).classList.add('active')
}