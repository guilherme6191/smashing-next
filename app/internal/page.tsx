import { fetchTodos } from '~/lib/db.server'
import { authConfig } from '~/pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth'
import Todos from './todos-wrapper'

export default async function TodosPage() {
  const { user } = await unstable_getServerSession(authConfig)
  const todos = await fetchTodos(user.email)
  if (!user) return <h1>No user found!</h1>
  return (
    <>
      <header className="flex items-center justify-around w-full py-10 mx-auto max-w-prose">
        <img
          className="rounded-full shadow-md w-44 h-44 shadow-fuchsia-50 border-px border-fuchsia-200"
          src={user.image}
          alt={`${user.name} profile photo`}
        />
        <h1 className="h-full text-6xl">{user.name}</h1>
      </header>
      <Todos userEmail={user.email} initialTodos={todos} />
    </>
  )
}
