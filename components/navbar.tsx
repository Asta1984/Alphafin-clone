"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  "First Home Buyer",
  "Buying Next Home",
  "Purchase an Investment",
  "Review Current Loans",
  "Commercial Loan",
  "Asset Finance",
  "Vehicle Finance",
  "Personal Loan",
  "Self-Managed Super Fund (SMSF) Lending",
  "Other Services",
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About Us
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {services.map((service) => (
                    <DropdownMenuItem key={service}>
                      <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                        {service}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/faq"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                FAQ's
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button>Contact Us</Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            >
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700">
                Services
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service) => (
                  <DropdownMenuItem key={service}>
                    <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                      {service}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/faq"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            >
              FAQ's
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="mt-3 space-y-1">
              <Button className="w-full justify-start">Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}