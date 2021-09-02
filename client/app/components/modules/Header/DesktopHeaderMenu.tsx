import { Menu, MenuItem } from '@material-ui/core'
import React from 'react'


interface Props {
  anchorEl: Element;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => any;
}


const DesktopHeaderMenu = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,


}:Props) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )
}

export default DesktopHeaderMenu
