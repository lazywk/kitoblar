import React from 'react'
import AuthContainer from 'components/template/AuthContainer'
import coverImg from 'assets/images/login-cover-img.png'
import ActionLink from 'components/ui/ActionLink'
import Form from 'components/template/Form'
import TextInput from 'components/ui/TextInput'
import Button from 'components/ui/Button'

export default function Login() {
  return (
    <AuthContainer img={coverImg}>
      <h2 className='auth-title'>Kirish</h2>
      <p className='auth-desc'>Sizning hisobingiz yo’qmi? <ActionLink path="/register">Ro’yxatdan o’tish</ActionLink></p>
      <Form className="auth-form-control">
        <TextInput placeholder='Email' />
        <TextInput placeholder='Parol' />
        <Button>Keyingi qadam</Button>
      </Form>
    </AuthContainer>
  )
}
