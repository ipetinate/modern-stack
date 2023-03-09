import { useToken } from 'store/useToken'

export function About() {
  const token = useToken((s) => s.token)

  return (
    <div className='h-full w-full'>
      <p className='text-white'>Token: {token ?? 'ainda nao tem token'}</p>
    </div>
  )
}
