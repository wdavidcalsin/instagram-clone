import { ProfileImg, TypescriptImagePublications } from '@/assets';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { CommentInput } from './components';

const PublicationCards = () => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Card sx={{ width: '100%', boxShadow: 'none' }}>
        <CardHeader
          sx={{ paddingX: 0 }}
          avatar={<Avatar alt="Willian David" src={ProfileImg} />}
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon
                sx={{ fontSize: '25px', color: 'rgb(38,38,38)' }}
              />
            </IconButton>
          }
          title={
            <Typography
              variant="h2"
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                paddingBottom: '5px',
              }}
            >
              williandavidcalsin
            </Typography>
          }
          subheader={
            <Typography variant="h2" sx={{ fontSize: '10px' }}>
              June 14, 2022
            </Typography>
          }
        />
        <CardMedia
          component="img"
          image={TypescriptImagePublications}
          alt="Paella dish"
          sx={{ borderRadius: '3px' }}
        />
        <CardActions
          sx={{
            justifyContent: 'space-between',
            paddingX: 0,
            paddingY: 0.5,
          }}
        >
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderOutlinedIcon
                sx={{ color: 'rgb(38,38,38)', fontSize: '25px' }}
              />
            </IconButton>
            <IconButton aria-label="comment">
              <ModeCommentOutlinedIcon
                sx={{ color: 'rgb(38,38,38)', fontSize: '25px' }}
              />
            </IconButton>
            <IconButton aria-label="send">
              <SendOutlinedIcon
                sx={{ color: 'rgb(38,38,38)', fontSize: '25px' }}
              />
            </IconButton>
          </Box>
          <Box>
            <IconButton aria-label="share">
              <BookmarkBorderOutlinedIcon
                sx={{ color: 'rgb(38,38,38)', fontSize: '25px' }}
              />
            </IconButton>
          </Box>
        </CardActions>
        <CardContent sx={{ paddingX: 0, paddingY: 0 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: '12px',
              fontWeight: 'bold',
              paddingBottom: 0.5,
            }}
          >
            230.306 likes
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  display: 'inline',
                  paddingRight: '5px',
                }}
              >
                williandavidcalsin
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontSize: '12px',
                  fontWeight: 'normal',
                  display: 'inline',
                }}
              >
                TypeScript is a free and open source programming language
                developed and maintained by Microsoft.
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  background: 'none',
                  padding: 0,
                  textTransform: 'none',
                  fontSize: '12px',
                  color: '#737373',
                }}
              >
                View all 1,720 comments
              </Button>
            </Box>
            <CommentInput />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PublicationCards;
