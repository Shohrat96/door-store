export const toastMessage = (text, destination) => {
  Toastify({
    text,
    duration: 3000,
    destination,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    // Use template to customize content
    onClick: function() {} // Callback after click
  }).showToast();
}