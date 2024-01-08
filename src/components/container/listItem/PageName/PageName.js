import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const PageName = (props) => {
    const router = useRouter()
    return (
        <Grid mb={2} container alignItems={'center'} justifyContent={'space-between'} >
            {props?.show ?

                <></>
                :
                <Grid display={props?.show} pb={1} sx={{ display: { md: 'none', xs: 'flex' } }} xs={1}>
                    <Avatar sx={{ backgroundColor: '#F8FAFD' }} >
                        <KeyboardBackspaceIcon onClick={() => router.push(props?.url)} sx={{ color: '#2B3445' }} />
                    </Avatar>
                </Grid>
            }

            <Grid pb={1} xs={11} textAlign={{ xs: props?.position, md: 'start' }}>
                <Typography fontSize={20} fontWeight={500} >
                    {props?.name}
                </Typography>
            </Grid>
            <Divider
                sx={{
                    display: { md: 'none', xs: 'flex' },
                    marginLeft: { xs: "calc(50% - 50vw)", md: 0 },
                    width: "100vw",
                }}></Divider>
        </Grid>
    );
}

export default PageName;