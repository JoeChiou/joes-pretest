import { Box, Card, CardContent, CardMedia, Link, Typography } from "@mui/material"
import moment from "moment"

interface NewsCardProps {
  data: {
    author: string,
    content: string,
    description: string,
    publishedAt: Date,
    source: { id: any, name: string },
    title: string,
    url: string,
    urlToImage: string,
  }
}

export const NewsCard = ({ data }: NewsCardProps) => {
  const title = data.title.split('-')[0];
  const source = data.title.split('-')[1];
  return (
    <Card component={Link} underline='none' sx={{ display: "flex", flexDirection: 'column', height: '100%' }} href={data.url} >
      <CardMedia component='img' src={data.urlToImage} height='200' />
      <CardContent sx={{ position: 'relative', height: '100%' }}>
        <Typography variant='h5' fontWeight={700} paragraph >
          {title}
        </Typography>
        <Typography variant='caption' sx={{ position: 'absolute', bottom: '8px' }}>
          {source}·{moment(data.publishedAt).fromNow()}
        </Typography>
      </CardContent>
    </Card >
  )
}