(function () {
  function updateEvaluation (event) {
    console.log(event.target)

    var company = event.target.getAttribute('company')
    document.getElementsByClassName('evaluation-info')[0]
      .style.backgroundImage = "url('/img/evaluation/" + company + ".png')"
  }

  var claros = Array.from(document.getElementsByClassName('claro'))

  claros.forEach(function (element) {
    element.addEventListener('click', updateEvaluation)
  })

  var telefonicas = Array.from(document.getElementsByClassName('telefonica'))

  telefonicas.forEach(function (element) {
    element.addEventListener('click', updateEvaluation)
  })

  var tigoUnes = Array.from(document.getElementsByClassName('tigo-une'))

  tigoUnes.forEach(function (element) {
    element.addEventListener('click', updateEvaluation)
  })

  var etbs = Array.from(document.getElementsByClassName('etb'))
  etbs.forEach(function (element) {
    element.addEventListener('click', updateEvaluation)
  })

  var directvs = Array.from(document.getElementsByClassName('directv'))
  directvs.forEach(function (element) {
    element.addEventListener('click', updateEvaluation)
  })
})()
