import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

export default function Navbar() {
  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '10px 20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        marginTop: '0.5em',
        padding: '1em'
      }}
    >
      <Box style={{flex: 1, width: '100%'}}>
        <img src="/pizza.jpg" alt="GoodFood" style={{ width: 'auto', height: '30px' }} />
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flex: 5, width: '100%'}}>
        {/* Use Next.js Link for client-side navigation */}
        <Link href="/" passHref>
          <Button
            sx={{
              color: '#333',
              fontWeight: 'bold',
              textTransform: 'none',
              marginRight: '20px',
              '&:hover': { color: '#007bff' },
            }}
          >
            Home
          </Button>
        </Link>
        <Link href="/menu" passHref>
          <Button
            sx={{
              color: '#333',
              fontWeight: 'bold',
              textTransform: 'none',
              marginRight: '20px',
              '&:hover': { color: '#007bff' },
            }}
          >
            Menu
          </Button>
        </Link>
        <Link href="/service" passHref>
          <Button
            sx={{
              color: '#333',
              fontWeight: 'bold',
              textTransform: 'none',
              marginRight: '20px',
              '&:hover': { color: '#007bff' },
            }}
          >
            Service
          </Button>
        </Link>
        <Link href="/service" passHref>
          <Button
            sx={{
              color: '#333',
              fontWeight: 'bold',
              textTransform: 'none',
              marginRight: '20px',
              '&:hover': { color: '#007bff' },
            }}
          >
            About Us
          </Button>
        </Link>
        <Link href="/gallery" passHref>
          <Button
            sx={{
              color: '#333',
              fontWeight: 'bold',
              textTransform: 'none',
              marginRight: '20px',
              '&:hover': { color: '#007bff' },
            }}
          >
            Gallery
          </Button>
        </Link>
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flex: 3, width: '100%'}}>
      <Badge badgeContent={4} color="secondary">
        <Button style={{
          backgroundColor: '#ff7700'
        }}>
          <ShoppingCartOutlinedIcon style={{
          color: 'white',
          fontSize: '1.7em'
        }}/>
        </Button>
        </Badge>
        <Link href="/login" passHref>
          <Button
            style={{
              color: '#333',
              textTransform: 'none',
              marginLeft: '20px',
              border: '1px solid blue'
            }}
          >
            Login
          </Button>
        </Link>
        <Link href="/register" passHref>
          <Button variant="contained"
            style={{
              backgroundColor: 'blue'
            }}
          >
            Create Account
          </Button>
        </Link>
      </Box>
    </Box>
  );
}