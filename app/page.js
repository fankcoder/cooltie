"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import AppAppBar from './components/appappbar';
import { Container, Paper, Select, MenuItem, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    margin: '0 auto', // 居中
    maxWidth: '80%', // 最大宽度为70%
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '80%', 
  },
  selectSticker: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
};

export default function Home() {
  const [part, setPart] = useState(1);

  const handlePartChange = (event) => {
    setPart(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"  style={styles.root}>
      <AppAppBar></AppAppBar>
      <Container style={styles.content}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="请输入自定义贴纸id"
            inputProps={{ 'aria-label': '请输入自定义贴纸id' }}
          />
          <Select
            displayEmpty
            value={part}
            label="Part"
            onChange={handlePartChange}
          >
            <MenuItem value={1}>从头匹配</MenuItem>
            <MenuItem value={2}>从中间匹配</MenuItem>
            <MenuItem value={3}>从结尾匹配</MenuItem>
          </Select>
          <Button variant="contained">搜索</Button>
        </Paper>
        <Box style={styles.selectSticker}>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
        </Box>
        <Box >
          <Box>
            <Button>D</Button>
            <Grid container spacing={1}>
              <Grid item xs>
                <Button variant="outlined" size="small">
                device
                </Button>
              </Grid>
              <Grid item xs>
                <Button variant="outlined" size="small">
                dupreeh
                </Button>
              </Grid>
              <Grid item xs>
                <Button variant="outlined" size="small">
                dexter
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box>
          <Button>A</Button>
            <Grid container spacing={1}>
              <Grid item xs>
                <Button variant="outlined" size="small">
                acoR
                </Button>
              </Grid>
              <Grid item xs>
                <Button variant="outlined" size="small">
                autimatic
                </Button>
              </Grid>
              <Grid item xs>
                <Button variant="outlined" size="small">
                apEX
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
