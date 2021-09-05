import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import Link from 'components/Link';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const MobileMenu = () => (
  <Transition
    as={Fragment}
    enter="duration-150 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Popover.Panel
      focus
      className="absolute inset-x-0 top-0 p-2 transition origin-top transform md:hidden"
    >
      <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
        <div className="flex items-center justify-between px-5 pt-4">
          <div>
            <img
              className="w-auto h-8"
              src="/assets/images/Icon-text-black.svg"
              alt="logo"
            />
          </div>
          <div className="-mr-2">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
              <span className="sr-only">Close menu</span>
              <XIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="pt-5 pb-6">
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
);

const Navbar = () => {
  return (
    <Popover as="header" className="relative">
      <div className="py-6 bg-background">
        <nav
          className="relative flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center justify-between flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="w-auto h-8 sm:h-10"
                  src="/assets/images/Icon-text-white.svg"
                  alt=""
                />
              </Link>
              <div className="flex items-center -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-background focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <MobileMenu />
    </Popover>
  );
};

export { Navbar };
