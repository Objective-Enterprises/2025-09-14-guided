import { useState } from 'react'
import { loginUser } from '../lib/auth'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  return (
    <form
      className="container login-form"
      onSubmit={(event) => {
        event.preventDefault()
        const correct = loginUser(username, password)
        if (correct) {
          router.push('/menu')
        }
      }}
    >
      <input value={username} onChange={(event) => setUsername(event.target.value)} />
      <input value={password} onChange={(event) => setPassword(event.target.value)} />
      <button>Login</button>
    </form>
  )
}