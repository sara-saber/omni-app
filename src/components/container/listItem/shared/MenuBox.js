import { Menu } from "@mui/material";

const MenuBox = (props) => {
    const handleClose = () => {
        props?.setAnchorEl(null);
    };
    return (
        <Menu
            anchorEl={props?.anchorEl}
            id="account-menu"
            open={props?.open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {props?.children}
        </Menu>


    );

    // {item.children_count > 0 ?
    //     <MenuBox anchorEl={categoryAnchorEl} open={openCategoryMenu} setAnchorEl={setcategoryAnchorEl}>
    //        <Box width={300} height={600}>
           
    //         </Box> 
    //     </MenuBox>
    //     : null}
}

export default MenuBox;