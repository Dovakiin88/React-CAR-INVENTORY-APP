import React from 'react'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button';
//import { Navbar } from '../../components/Navbar'
import { Link } from 'react-router-dom';
import gogo from '../../components/static/gogo.png' 
import { Navbar } from '../Navbar';

interface test{
    title:string;
}

const useStyles = makeStyles({
    background:{
        backgroundImage: `linear-gradient(0deg, rgba(87,218,219,1) 0%, rgba(218,186,117,1) 100%)`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',

    },
    button_text:{
        color: 'black',
        textDecoration: 'none',
    },
})

export const Home = (props: test) =>  {

    const classes = useStyles()

  return (
    <>
        <Navbar/>
        <div className= {`${classes.background}`}>
            <div className= {`${classes.main_text}`}>
                <h1>{props.title}</h1>
                <Button>
                    <Link to= '/cars' className= {`${classes.button_text}`}> Go Shopping!</Link>
                </Button>
                <div>
                    <img src="gogo.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

