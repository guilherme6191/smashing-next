import { type TodoProps } from '~/lib/db.server'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addTodo } from '~/lib/db.client'

export const useAddTodo = (userEmail: string) => {
  const queryClient = useQueryClient()

  return useMutation((newTodo: TodoProps) => addTodo(newTodo, userEmail), {
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries(['todos'])

      const previousTodos = queryClient.getQueryData<TodoProps[]>(['todos'])
      // optimistic update
      queryClient.setQueryData(['todos'], (old: TodoProps[]) => [
        newTodo,
        ...old,
      ])

      return { previousTodos }
    },
    onError: (err: Error, _newTodo, context) => {
      console.log(err)
      // return previous data on error
      queryClient.setQueryData(['todos'], context.previousTodos)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })
}
