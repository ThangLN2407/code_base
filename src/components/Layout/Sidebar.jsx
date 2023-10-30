import React, { useState } from 'react'
import styles from './styles.module.scss'
import sideBarData from '../../data/sidebar.json'
import { ExpandMoreIcon, KeyboardArrowUpIcon } from '../../utils/Icons'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Sidebar = () => {
  const location = useLocation()

  const [subMenuStates, setSubMenuStates] = useState(
    sideBarData.map(() => false),
  )

  const toggleSubMenu = index => {
    const newSubMenuStates = subMenuStates.map((state, i) =>
      i === index ? !state : false,
    )
    setSubMenuStates(newSubMenuStates)
  }
  const handleSubMenuClick = e => {
    e.stopPropagation() // Ngăn chặn sự kiện click từ lan ra phần tử cha (menu chính)
  }

  return (
    <div className={styles.sidebar}>
      <ul className={styles.list_menu}>
        {sideBarData.map((item, index) => (
          <li
            key={index}
            className={styles.menu}
            onClick={() => item.childMenu.length > 0 && toggleSubMenu(index)}
          >
            <span className={styles.menu_name}>
              {item?.childMenu.length ? (
                <>
                  {item.title}{' '}
                  {subMenuStates[index] ? (
                    <ExpandMoreIcon />
                  ) : (
                    <KeyboardArrowUpIcon />
                  )}
                </>
              ) : (
                <>
                  <Link to={item.path}>{item.title}</Link>
                </>
              )}
            </span>

            {item.childMenu.length > 0 && (
              <ul
                className={`${styles.list_sub_menu} ${
                  subMenuStates[index] && styles.active_menu
                }`}
                onClick={handleSubMenuClick}
              >
                {item.childMenu.map((item2, index2) => (
                  <li key={index2} className={styles.sub_menu}>
                    <Link to={item2.path}> {item2.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
