import AuthContainer from 'components/template/AuthContainer'
import React from 'react'
import coverImg from 'assets/images/register-cover-img.png'
import { Link } from 'react-router-dom'
import ActionLink from 'components/ui/ActionLink'
import Form from 'components/template/Form'
import TextInput from 'components/ui/TextInput'
import Button from 'components/ui/Button'
import useAuth from 'utils/hooks/useAuth'
import getFormValues from 'utils/getFormValues'
import toast, { Toaster } from 'react-hot-toast'

export default function Register() {
  const { signUp } = useAuth()


  const handleSubmit = async () => {
    const values = getFormValues('register-form')
    const resp = await signUp(values)
    !resp.success && toast.error(resp.message)
  }


  return (
    <AuthContainer img={coverImg}>
      <h2 className='auth-title'>Ro’yxatdan o’tish</h2>
      <p className='auth-desc'>Sizning hisobingiz bormi? <ActionLink path="/login">Kirish</ActionLink></p>
      <Form className="auth-form-control register-form" onSubmit={handleSubmit}>
        <TextInput name='first_name' placeholder='Ismingiz' />
        <TextInput name='last_name' placeholder='Familyangiz' />
        <TextInput name='phone_number' placeholder='Telefon raqam' />
        <TextInput name='email' placeholder='Email' />
        <TextInput name='password' placeholder='Parol' />
        <Button type='submit'>Keyingi qadam</Button>
      </Form>

      <Toaster
        position="top-center"
        reve />
    </AuthContainer>
  )
}
