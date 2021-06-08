import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        marginTop: 15,
    },
    addBtn: {
        textAlign: 'center',
        marginBottom: 15,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        border: '2px solid #255',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    submit: {
        marginTop: 10
    },
    title: {
        marginBottom: 20
    }
}));