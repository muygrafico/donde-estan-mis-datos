(function () {
  var evaluationLinks = {
    'claro': 'https://karisma.org.co/descargar/donde-estan-mis-datos-informe-2016-claro/',
    'telefonica': 'https://karisma.org.co/descargar/donde-estan-mis-datos-informe-2016-telefonica-movistar/',
    'tigoUne': 'https://karisma.org.co/descargar/donde-estan-mis-datos-informe-2016-tigo-une/',
    'etb': 'https://karisma.org.co/descargar/donde-estan-mis-datos-informe-2016-tigo-une/',
    'directv': 'https://karisma.org.co/descargar/donde-estan-mis-datos-informe-2016-directv/'
  }

  function handleActiveTab (company) {
    var elems = document.querySelector('.active')
    if (elems !== null) { elems.classList.remove('active') }
    var d = document.getElementsByClassName(company)[1]
    d.className += ' active'
  }

  function updateLink (element, link) {
    var el = document.getElementsByClassName(element)[0]
    el.href = link
  }

  function handleActiveEvaluationLink (company) {
    switch (company) {
      case 'claro':
        updateLink('company-evaluation-link', evaluationLinks.claro)
        break
      case 'telefonica':
        updateLink('company-evaluation-link', evaluationLinks.telefonica)
        break
      case 'tigo-une':
        updateLink('company-evaluation-link', evaluationLinks.tigoUne)
        break
      case 'etb':
        updateLink('company-evaluation-link', evaluationLinks.etb)
        break
      case 'directv':
        updateLink('company-evaluation-link', evaluationLinks.directv)
        break
    }
  }

  function updateEvaluation (event) {
    var company = event.target.getAttribute('company')
    document.getElementsByClassName('evaluation-info')[0]
      .style.backgroundImage = "url('../../img/evaluation/" + company + ".png')"

    handleActiveTab(company)
    handleActiveEvaluationLink(company)
  }

  var companiesButtons = Array.from(document.getElementsByClassName('company'))

  companiesButtons.forEach(function (element) {
    element.addEventListener('click', updateEvaluation)
  })
})()
