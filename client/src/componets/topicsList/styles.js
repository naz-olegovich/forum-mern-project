import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    addBtnDiv: {
        position: 'fixed',
        right: theme.spacing(6),
        bottom: theme.spacing(6),
        // transform: "scale(1.2)",
    },
    fabBtn: {
        backgroundColor: '#d2601a',
        background: '#f1f1f1',
        '&:hover': {
            background: '#E6742E',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto'
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
