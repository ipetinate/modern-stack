import { useState } from 'react'
import { useToken } from 'store/useToken'

export const Information = () => {
  const { removeToken, setToken, token } = useToken()

  const [state, setState] = useState(token ?? '')

  return (
    <div className='h-full w-full flex flex-col gap-10'>
      <div>
        <input
          type='text'
          name='token'
          placeholder='Token'
          value={state}
          onChange={({ target: { value } }) => setState(value)}
        />
      </div>

      <div className='flex flex-row gap-5'>
        <button
          className='w-32 h-8 bg-violet-500 text-whtie rounded-md'
          onClick={() => setToken(state)}
        >
          Salvar
        </button>

        <button
          className='w-32 h-8 bg-violet-500 text-whtie rounded-md'
          onClick={removeToken}
        >
          Remover
        </button>
      </div>
    </div>
  )
}
