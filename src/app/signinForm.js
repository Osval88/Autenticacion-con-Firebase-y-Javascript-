import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const singInForm = document.querySelector('#login-form')

singInForm.addEventListener('submit' , async e => {
    e.preventDefault()

    const email = singInForm['login-email'].value;
    const password = singInForm['login-password'].value;

    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password)
      console.log(credentials)

      const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
      modal.hide()

      showMessage('Welcome '+ credentials.user.email)
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        showMessage('User or password not found' , 'error')
      } else {
        showMessage(error.message, 'error')
      }
    }
})