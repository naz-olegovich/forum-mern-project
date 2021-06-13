import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: "0 0 15px 15px",
        width: '96%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: theme.spacing(2),
        backgroundColor: '#1d3c45',
        marginBottom: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },

    },
    title: {
        textDecoration: 'none',
        color: '#d2601a',
        flexGrow: 1,
        fontWeight: "bold",
        fontSize: 23
    },
    logo: {
        display: 'inline-block',
        flexGrow: 1,
    },
    username: {
        display: 'inline-block',
        marginRight: theme.spacing(2),
        color:'aqua'
    },
    menuBar: {

        display: 'inline-block',
        float: 'right',
    },
    btn: {
        background: '#22414A',
        borderRadius: 5,
        color: 'white',
        textDecoration: 'none',
    }
}));

