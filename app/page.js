"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import AppAppBar from './components/appappbar';
import { Container, Paper, Select, MenuItem, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { s_search, s_get } from './api/api';

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
  const [name, setName] = useState('');
  const [part, setPart] = useState(1);
  const [nameList, setNameList] = useState([]);
  const [wordInfo, setWordInfo] = useState([]);

  const handleInputBase = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  }
  
  const handlePartChange = (event) => {
    setPart(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = () => {
    // console.log(name, part);
    const fetchSearch = async () => {
      const resp = await s_search(name, part);
      if (resp.code === 200) {
        setNameList(resp.body.data)
      }
      // console.log('resp', resp);
    }
    fetchSearch();
  }

  const handleWord = (word) => {
    // console.log(word);
    const fetchWordInfo = async () => {
      const resp = await s_get(word);

      if (resp.code === 200) {
        setWordInfo(resp.body.data)
      }
    }
    fetchWordInfo();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"  style={styles.root}>
      {/* <AppAppBar></AppAppBar> */}
      <Container style={styles.content}>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="请输入自定义贴纸id"
            inputProps={{ 'aria-label': '请输入自定义贴纸id' }}
            onChange={handleInputBase}
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
          <Button variant="contained" onClick={handleSearch}>搜索</Button>
        </Paper>
        {/* <Box style={styles.selectSticker}>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
          <Box component="section" sx={{ p: 2, border: '1px dashed grey', width:124, height:124, m:2 }}></Box>
        </Box> */}
        <Box >
          {nameList && (
            <Box>
              {nameList.map((wordDict, index) => (
                <Box>
                  <Button>{Object.keys(wordDict)}</Button>
                  <Grid container spacing={1}>
                    {Object.values(wordDict).map((wordList, index) => (
                      <Grid item xs key={index}>
                        {wordList.map((word, idx) => (
                          <Button variant="outlined" style={{textTransform: 'none', margin:2}} size="small" onClick={() => handleWord(word)}>
                            {word}
                          </Button>
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Box>
          )}
        </Box>
        <Box>
          {wordInfo && (
            <Box>
              <ImageList cols={5}>
              {wordInfo.map((info, index) => (
                <ImageListItem key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <img src={info.icon_url} alt={info.market_name_cn} style={{ width: 150, height: 150 }}/>
                   <ImageListItemBar
                      title={info.market_hash_name}
                      subtitle={info.price}
                      position="below"
                    />
                </ImageListItem>
              ))}
              </ImageList>

            </Box>
          )}
        </Box>
      </Container>
    </main>
  );
}
