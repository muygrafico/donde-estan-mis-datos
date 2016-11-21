(function () {
  function f1 () {
    console.log('calling function f1')
  }

  var claros = Array.from(document.getElementsByClassName('claro'))

  claros.forEach(function (element) {
    element.addEventListener('click', f1)
  })

  var telefonica = document.getElementsByClassName('telefonica')[0]
  telefonica.addEventListener('click', f1)

  var tigoUne = document.getElementsByClassName('tigo-une')[0]
  tigoUne.addEventListener('click', f1)

  var etb = document.getElementsByClassName('etb')[0]
  etb.addEventListener('click', f1)

  var directv = document.getElementsByClassName('directv')[0]
  directv.addEventListener('click', f1)
})()
