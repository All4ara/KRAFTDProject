import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'steelblue',
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px 10px 15px',
  },
  heading: {
    color: 'white',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '300px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '150px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logout: {
    fontWeight: '700',
    color: 'black',
    fontSize: '1rem',
    backgroundColor: 'beige'
  }
}));