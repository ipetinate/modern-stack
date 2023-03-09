import { ForwardRefExoticComponent, SVGProps, useMemo } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import {
  HomeIcon,
  InformationCircleIcon,
  DocumentIcon
} from '@heroicons/react/24/outline'

import './App.css'

type IMenuItem = {
  label: string
  path: string
  icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  >
}

export const App = () => {
  const links = useMemo(
    (): IMenuItem[] => [
      {
        path: '/',
        label: 'Home',
        icon: HomeIcon
      },
      {
        path: '/about',
        label: 'About',
        icon: InformationCircleIcon
      },
      {
        path: '/info',
        label: 'Information',
        icon: DocumentIcon
      }
    ],
    []
  )

  return (
    <div className='container'>
      <div className='menu'>
        {links.map(({ label, path, icon }) => (
          <MenuItem
            label={label}
            path={path}
            icon={icon}
          />
        ))}
      </div>

      <div className='main_content'>
        <Outlet />
      </div>
    </div>
  )
}

function MenuItem({ path, label, icon: Icon }: IMenuItem) {
  const { pathname } = useLocation()

  const isActive = useMemo(() => path === pathname, [pathname])

  return (
    <Link
      className={`
        h-10 w-full text-white text-xl flex gap-3 items-center px-5 
        ${isActive ? 'bg-emerald-500' : 'bg-slate-600 hover:bg-cyan-800'}
      `}
      to={path}
    >
      <Icon className='w-5 h-5' />

      {label}
    </Link>
  )
}
