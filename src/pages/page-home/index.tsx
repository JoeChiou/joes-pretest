import { Box, Grid } from "@mui/material"
import { makeStyles } from '@material-ui/styles';
import { useEffect, useState } from "react";
import { fetchApi } from "../../services";
import { PageBase } from "../../components";
import { NewsCard } from "../../components/news-card";

export const PageHome = () => {
  const [data, setData] = useState({ articles: [] });
  const fetchData = async () => {
    fetchApi().then(setData);
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <PageBase>
      <Box>
        <Grid container spacing={2}>
          {data.articles.map(data =>
            <Grid key={data['publishedAt']} item xs={12} sm={6} md={4}>
              <NewsCard data={data} />
            </Grid>
          )}
        </Grid>
      </Box>
    </PageBase>
  )
};

const useStyle = makeStyles({

})