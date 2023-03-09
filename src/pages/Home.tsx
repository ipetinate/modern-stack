import { useCallback } from 'react'
import { useCounter } from 'store/useCounter'

export const Home = () => {
  const { count, setCount } = useCounter()

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const decrement = useCallback(() => {
    if (count === 0) return

    setCount(count - 1)
  }, [count])

  return (
    <div className='h-full w-full text-white'>
      <div className='p-10 flex flex-col gap-5'>
        <div className=''>{count}</div>

        <div className='flex flwx-row gap-5'>
          <button
            className='w-32 h-8 bg-violet-500 text-whtie rounded-md'
            onClick={increment}
          >
            Incrementar
          </button>

          <button
            className='w-32 h-8 bg-violet-500 text-whtie rounded-md'
            onClick={decrement}
          >
            Decrementar
          </button>
        </div>
      </div>
    </div>
  )
}
