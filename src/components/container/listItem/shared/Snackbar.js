
import { Snackbar, Alert } from "@mui/material";
const SnackBar = (props) => {

    const handleClose = () => {
        setTimeout(() => {
            props?.setOpen(false)
        }, 100)

    }
    return (
        <Snackbar onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={props?.openSnackbar} autoHideDuration={1000} >
            <Alert severity={props?.severity ?props?.severity:'error'} sx={{ width: '100%' }} sd={console.log(props?.message)}>
                {props?.message}
            </Alert>
        </Snackbar>
    );
}

export default SnackBar;