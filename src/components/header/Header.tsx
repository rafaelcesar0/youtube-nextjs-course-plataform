'use client';
import { useEffect, useState } from 'react';
import { MdMenu, MdOutlineOpenInNew } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const [title, setTitle] = useState('CodarSe');
  const [drawer, setDrawer] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false);
  }, [currentPath]);

  return (
    <nav className='flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6'>
      <button className='sm:hidden' onClick={() => setDrawer(true)}>
        <MdMenu size={24} />
      </button>

      <ul className='flex gap-2 items-center' tabIndex={drawer ? -1 : undefined}>
        <li className='my-2'>
          <Link
            href='/'
            className='border-2 rounded-md py-1 px-1 font-bold hover:no-underline'
          >
            CODARSE
          </Link>
        </li>
        <li className='hidden sm:block'>
          <Link
            href='/'
            data-active={currentPath === '/'}
            className='data-[active=true]:underline'
          >
            Página inicial
          </Link>
        </li>
        <li className='hidden sm:block'>
          <Link
            href='/cursos'
            data-active={currentPath === '/cursos'}
            className='data-[active=true]:underline'
          >
            Cursos
          </Link>
        </li>
        <li className='hidden sm:block'>
          <Link
            href='https://blog.codarse.com'
            target='_blank'
            className='flex gap-1 items-center'
          >
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>

      <div
        data-open={drawer}
        tabIndex={drawer ? undefined : -1}
        onClick={() => setDrawer(false)}
        className='bg-gradient-to-r from-background fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full'
      >
        <ul
          onClick={(e) => e.stopPropagation()}
          className='flex gap-2 flex-col p-4 w-60 h-full bg-background'
        >
          <li className=''>
            <Link
              href='/'
              data-active={currentPath === '/'}
              className='data-[active=true]:underline'
            >
              Página inicial
            </Link>
          </li>
          <li className=''>
            <Link
              href='/cursos'
              data-active={currentPath === '/cursos'}
              className='data-[active=true]:underline'
            >
              Cursos
            </Link>
          </li>
          <li className=''>
            <Link
              href='https://blog.codarse.com'
              target='_blank'
              className='flex gap-1 items-center'
            >
              Blog
              <MdOutlineOpenInNew />
            </Link>
          </li>
        </ul>
      </div>
      <h1 className='sm:hidde'>{title}</h1>
    </nav>
  );
};
