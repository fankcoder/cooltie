"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { login, info } from '../api/api';
import Image from 'next/image';

const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
  marginLeft: '10px',
};

const navButtonStyle = {
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "avenir next", avenir, "segoe ui", "helvetica neue", helvetica, Ubuntu, roboto, noto, arial, sans-serif', // 字体
  fontWeight: 'bold',
  lineHeight: '1.5', // 行高
  color: '#132036', // 文字颜色
  WebkitFontSmoothing: 'antialiased', // Webkit字体平滑
  MozOsxFontSmoothing: 'grayscale', // Moz字体平滑
  textRendering: 'optimizeLegibility', // 文字渲染
  textTransform: 'none', // 禁用大小写转换
}


function AppAppBar() {
  const [isLogin, setIsLogin] = useState(false);
  const [user_info, setUserInfo] = useState(null);
  useEffect(() => {
    // 判断localStorage是否有jwtToken
    const access_token = localStorage.getItem('jwtToken');
    if (access_token) {
      const fetchInfo = async () => {
        const resp = await info(access_token);
        console.log('info0:', resp)
        setUserInfo(resp);
        localStorage.setItem('info', user_info);
        setIsLogin(true);
      }
      fetchInfo();
    }
  }, []); 

  const [showDropdown, setShowDropdown] = useState(false);
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  const handleLoginOut = () => {
    // 在这里执行退出登录的逻辑
    // console.log('点击了退出登录按钮');
    setUserInfo(null);
    setIsLogin(false);
    localStorage.removeItem('jwtToken');
    window.location.href = '/';
  };

  return (
    <div >
      <AppBar
        // position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Container maxWidth="lg" sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
          <Toolbar
            variant="regular"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              backgroundColor: '#fff',
              borderColor: 'divider',
              width: '80%',
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Link href={'/'}>
                <Image src={require('../assets/logo.png')} style={logoStyle} alt="logo" />
              </Link>

              <Box sx={{ display: { xs: 'none', md: 'flex', marginLeft: '40px' } }}>
                  <Button href={'/Stickers'} style={navButtonStyle}>
                    贴纸
                  </Button>
                  <Button href={'/weapons'} style={navButtonStyle}>
                    武器
                  </Button>
              </Box>
            </Box>
            {isLogin ? (
              <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
              > 
                <Button variant="contained" href={'/profile'} sx={{textTransform: 'none', backgroundColor: '#3460d8'}}>My Account</Button>
                <Button variant="outlined" onClick={handleLoginOut} sx={{borderColor: '#cacdd3', textTransform: 'none', color: '#132036'}}>Log out</Button>
              </Box>
            ): (
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 0.5,
                  alignItems: 'center',
                }}
              >
                <Link href="/login" passHref>
                  <Button
                    color="primary"
                    variant="outlined"
                    sx={{textTransform: 'none',}}
                  >
                    登录
                  </Button>
                </Link>
                <Link href="/reg" passHref>
                  <Button
                    color="primary"
                    variant="contained"
                    sx={{textTransform: 'none',}}
                  >
                    注册
                  </Button>
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;