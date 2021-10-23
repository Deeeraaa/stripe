import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return <aside className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>
    <div className="sidebar">
      <button className="close-btn" onClick={closeSidebar}><FaTimes/></button>
      <div className="sidebar-links">
        {sublinks.map((sublinks, index) => {
          const { page, links } = sublinks;
          return (<article key={index}>
            <h4>{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((item, index) => {
                const { label, icon, url } = item;
                return (<a key={index} href={url}>
                  {icon}
                  {label}
                </a>
                  )
                })}
            </div>
          </article>
          )
        })}
      </div>
    </div>
  </aside>
}

export default Sidebar
