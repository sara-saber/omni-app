import { Button } from '@mui/material';
const CustomButton = (props) => {
    return (
        <Button variant='contained' type='submit' sx={{
            '&:hover': {
                backgroundColor: props?.hoverbg
            },
            textTransform: 'none',
            height: '40px',
            fontWeight: 200,
            fontSize: 16, borderRadius: props?.br, backgroundColor: props?.bg, color: props?.color
        }}>{props?.name}</Button>

    );
}

export default CustomButton;