import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    divPagination: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    ul: {
        justifyContent: 'space-around',
    },
    pagination: {
        borderRadius: 4,
        padding: '2px',
        width: '50%',
    },
    paginationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

}));
