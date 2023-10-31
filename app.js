const form = document.querySelector(".form")
const newsletterForm = document.querySelector(".newsletter__form-control")
const message = document.querySelector(".form-control span")
const newsletterMessage = document.querySelector(".newsletter__form-control span")
const input = document.querySelector("#email-submit")
const newsletterInput = document.querySelector(".newsletter__form-control input")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    input.value === "" ? (
        message.classList.add("error"),
        message.classList.remove("error-span")
    )  : (
        message.classList.add("error-span") ,
        message.classList.remove("error"),
        input.value = ""
    )
})

newsletterForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    newsletterInput.value === "" ?(
         newsletterMessage.classList.add("error"),
         newsletterMessage.classList.remove("error-span")
         ) : (
            newsletterMessage.classList.add("error-span"),
            newsletterMessage.classList.remove("error"),
            newsletterInput.value = ""
         )
    
})
