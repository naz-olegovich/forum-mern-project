import { makeStyles } from '@material-ui/core/styles';

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
        boxShadow: theme.shadows[20],
        padding: theme.spacing(2, 6, 3),
    },
    title: {
        marginBottom: theme.spacing(3),
        textAlign: 'center'
    },
    submit: {
        marginTop: 10
    },
    textarea: {
        padding: 5,
    },
}));
