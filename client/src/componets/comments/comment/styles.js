import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: '15px 10px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: '90%'

    },
    username: {
        display: 'inline',
        margin: 0,
        textAlign: 'left',
        float: 'left',

    },
    text: {
        padding: theme.spacing(1)
    },
    date: {
        display: 'inline',
        color: 'gray',
        marginLeft: theme.spacing(2)

    },
    inline: {
        display: 'inline-block',
        width: '100%',
    },

    comments: {
        borderRadius: 15,
        marginBottom: theme.spacing(1),
        padding: '8px 10px 10px 20px',


    }
}));
