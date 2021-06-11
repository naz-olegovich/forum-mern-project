import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    appBar:{
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    title: {
        textDecoration: 'none',
        color: 'white',
    },
    btn: {
        display:'flex',
        alignContent:'right',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 15,
        color: 'white',
        marginLeft: 30
    }
}));

