function time() {
var data = new Date()

var sms = window.document.getElementById('sms')
var img = window.document.getElementById('imagem')

h = data.getHours()
m = data.getMinutes()
s = data.getSeconds()
hora = data.getHours()
document.getElementById('sms').innerHTML = h+":"+m+":"+s
setTimeout ('time()',500)

dia = data.getDate().toString().padStart(2,'0')
mes = String(data.getMonth() + 1).padStart(2,'0')
ano = data.getFullYear()

document.getElementById('dat').innerHTML = `${dia} / ${mes} / ${ano}`

var semana = ["[ Domingo ]", "[ Segunda-Feira ]", "[ Terça-Feira ]", "[ Quarta-Feira ]", "[ Quinta-Feira ]", "[ Sexta-Feira ]", "[Sábado]" ]
document.getElementById("dia").innerHTML = semana[data.getDay()]

if (hora >= 0 && hora < 12) {
    img.src = 'dia.png'
    document.body.style.background = '#FF4500'

}else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#006400'
}else { 
    img.src = 'noite.png'
    document.body.style.background = '#03265E'
    }
}