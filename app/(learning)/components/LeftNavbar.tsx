'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { categories } from '@/data/data'
import { usePathname } from 'next/navigation'

const LeftNavbar = () => {
  const [expandedCategory, setExpandedCategory] = useState<string>("") 
  const pathname = usePathname() // Getting the current route

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? "" : categoryName) 
  }

  const getLinkClassName = (route: string) => {
    return pathname === route
      ? 'block w-full text-left text-sm text-purple-700 hover:text-purple-700'
      : 'block w-full text-left text-sm text-gray-500 hover:text-purple-700'
  }

  return (
    <div className="flex h-full overflow-y-auto">
      {/* Sidebar */}
      <aside className="w-64 h-full min-h-screen pb-10 bg-gray-50 border-r border-gray-200 shadow-lg rounded-lg md:block hidden">
        <div className="p-6 ">
          <h2 className="text-lg font-semibold text-gray-900">Infinity Learning</h2>
        </div>
        <nav className="px-4">
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  className={`flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-purple-700 ${
                    expandedCategory === category.name ? 'text-purple-700' : ''
                  }`}
                  onClick={() => toggleCategory(category.name)}
                >
                  <span>{category.name}</span>
                  {expandedCategory === category.name ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                {expandedCategory === category.name && category.subcategories.length > 0 && (
                  <ul className="mt-2 space-y-2 ml-4">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subcategory.route}
                          className={getLinkClassName(subcategory.route)}
                        >
                          {subcategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default LeftNavbar
