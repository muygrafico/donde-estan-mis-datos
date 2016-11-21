(function () {
  function handleActiveTab (company) {
    var elems = document.querySelector('.active')
    if (elems !== null) { elems.classList.remove('active') }
    var d = document.getElementsByClassName(company)[1]
    d.className += ' active'
  }

  function updateEvaluation (event) {
    var company = event.target.getAttribute('company')
    document.getElementsByClassName('evaluation-info')[0]
      .style.backgroundImage = "url('/img/evaluation/" + company + ".png')"

    handleActiveTab(company)
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
