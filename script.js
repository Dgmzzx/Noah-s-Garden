// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when clicking a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    mobileMenu.classList.remove("active")
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileMenuBtn.classList.remove("active")
    mobileMenu.classList.remove("active")
  }
})

// Header scroll effect
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Update current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  // Create WhatsApp message
  const whatsappMessage = `Hola! Soy ${name}

📧 Correo: ${email}

Mensaje:
${message}`

  // Encode message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage)

  // Replace with your WhatsApp number (include country code without + or spaces)
  const whatsappNumber = "1234567890"

  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")

  // Reset form
  contactForm.reset()

  // Show success message (optional)
  alert("Redirigiendo a WhatsApp...")
})
