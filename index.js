const yesBtn = document.querySelector('#yesBtn')

yesBtn.addEventListener('click', function() {
    alert('SABIA QUE DIRIAS QUE SI :3')
    alert('ME GUSTAS MUCHO')
})


constnoBtn = document.querySelector('noBtn')

noBtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random() * 100)
    const randomY = parseInt(Math.random() * 100)

    noBtn.style.setProperty('top', randomX + '%')
    noBtn.style.setProperty('top', randomY + '%')

    noBtn.style.setProperty('transform', 'traslate(-${randomX}%,  -${randomY}%,')
})