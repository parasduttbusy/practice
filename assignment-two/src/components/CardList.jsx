import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import data from '../data';
import { Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CompanyContext } from './companyContext';
import { alpha, styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const LeftHeadingTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#6C6C6C"
}));


export default function CardList() {
  const companyData = useContext(CompanyContext)
  return (
    <List sx={{
      width: '100%',
      maxHeight: "78vh",
      overflowX: "hidden",
      overflowY: "scroll",
      flexDirection: "column",
      rowGap: 2,
      display: "flex"
    }}>
      {companyData.map((val, ind) => {
        return (
          <Link style={{ textDecoration: "none" }} key={val.companyId} to={`/${val.companyId}`}>
            <Box >
              <Paper sx={{
                cursor: "pointer",
                padding: 2,
                paddingY: 1.5,
                marginX: 2,
                boxShadow: 0,
                ':hover': {
                  boxShadow: 5, // theme.shadows[20]
                },
              }} >

                <ListItemText
                  primary={
                    <Box sx={{display:"flex", justifyContent:"space-between"}}>
                      <LeftHeadingTypo>
                        {val.name}
                      </LeftHeadingTypo>
                      <MoreVertIcon/>
                    </Box>

                  }
                  secondary={
                    <>
                      <Typography display="block"
                        component="span"
                        variant="body2"
                      >
                        {val.companyId}
                      </Typography>
                      {val.city} | {val.country}
                    </>
                  }
                />
              </Paper>
            </Box>
          </Link>
        )
      })}

    </List>
  );
}
