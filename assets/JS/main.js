$(document).on('pageinit', '#contact', function () {
  $('#contactForm').on('submit', function (event) {
    event.preventDefault()

    const clientName = $('#username').val()
    const customBudget = $('#budget').val()
    const orderDetails = $('#message').val()

    if (clientName.trim() === '' || orderDetails.trim() === '') {
      alert(
        'System Error: Please populate all required entry forms before executing submission.'
      )
      return
    }

    alert(
      '====================================\n' +
        '  Windows XP - Submission Wizard    \n' +
        '====================================\n\n' +
        'Hello ' +
        clientName +
        ',\n\n' +
        'Your custom sizing structural order parameters have been dispatched successfully.\n' +
        'Estimated Budget Blueprint: ' +
        customBudget +
        ' BHD.\n' +
        'Our design team will contact you shortly to authorize final production metrics.'
    )

    this.reset()
  })
})
