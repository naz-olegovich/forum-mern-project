import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    ul: {
        justifyContent: 'space-around',
        marginBottom:theme.spacing(5)
    },


    paginationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    }

}));
