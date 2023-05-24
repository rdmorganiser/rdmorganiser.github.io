var timeout = 9000

function swap_image() {
  var header_images = $('.header-image')
  var nextel = header_images[0]
  var replaced = false

  $.each(header_images, function (idx, el) {
    if ($(el).hasClass('visible')) {
      $(el).removeClass('visible')

      if (header_images.length >= idx + 1) {
        nextel = header_images[idx + 1]
      }
      $(nextel).addClass('visible')
      replaced = true
      return false
    }

    if (replaced === false) {
      $(header_images[0]).addClass('visible')
    }
  })

  setTimeout(swap_image, timeout)
}

$(document).ready(function () {
  swap_image()
})
