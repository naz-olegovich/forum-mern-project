import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: '40px 20px',
        marginTop: 10,
        width: '90%'
    },
    username: {
        margin: 0,
        textAlign: 'left'
    },
    text: {
        textAlign: 'left'
    },
    date: {
        textAlign: 'left',
        color: 'gray'
    },
    submit: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(4)
    }
}));
