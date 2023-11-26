import AuthContainer from 'components/template/AuthContainer'
import React from 'react'
import coverImg from 'assets/images/register-cover-img.png'
import { Link } from 'react-router-dom'
import ActionLink from 'components/ui/ActionLink'
import Form from 'components/template/Form'
import TextInput from 'components/ui/TextInput'
import Button from 'components/ui/Button'

export default function Register() {
  return (
    <AuthContainer img={coverImg}>
      <h2 className='auth-title'>Ro’yxatdan o’tish</h2>
      <p className='auth-desc'>Sizning hisobingiz bormi? <ActionLink path="/login">Kirish</ActionLink></p>
      <Form className="auth-form-control">
        <TextInput placeholder='Ismingiz' />
        <TextInput placeholder='Familyangiz' />
        <TextInput placeholder='Telefon raqam' />
        <TextInput placeholder='Email' />
        <TextInput placeholder='Parol' />
        <Button>Keyingi qadam</Button>
      </Form>
    </AuthContainer>
  )
}
