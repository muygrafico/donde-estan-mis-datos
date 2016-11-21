(function () {
  function f1 (event) {
    console.log(event.target)

    var company = event.target.getAttribute('company')
    document.getElementsByClassName('evaluation-info')[0]
      .style.backgroundImage = "url('/img/evaluation/" + company + ".png')"

    document.getElementsByClassName('active')[1].className = ''
  }

  var claros = Array.from(document.getElementsByClassName('claro'))

  claros.forEach(function (element) {
    element.addEventListener('click', f1)
  })

  var telefonicas = Array.from(document.getElementsByClassName('telefonica'))

  telefonicas.forEach(function (element) {
    element.addEventListener('click', f1)
  })

  var tigoUnes = Array.from(document.getElementsByClassName('tigo-une'))

  tigoUnes.forEach(function (element) {
    element.addEventListener('click', f1)
  })

  var etbs = Array.from(document.getElementsByClassName('etb'))
  etbs.forEach(function (element) {
    element.addEventListener('click', f1)
  })

  var directvs = Array.from(document.getElementsByClassName('directv'))
  directvs.forEach(function (element) {
    element.addEventListener('click', f1)
  })
})()
