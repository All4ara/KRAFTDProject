import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0)',
        zIndex: '1'
      },
      heading: {
        color: 'rgba(225,225,225,1)',
      },
      image: {
        marginLeft: '15px',
        zIndex: '2'
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse"
        }
      }
      
}));