import { AppBar, Box, CssBaseline, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material"
import PublicIcon from '@mui/icons-material/Public';

const drawerWidth = 240;

export const PageBase = (props: any) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: 'white' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" color='black'>
            top bar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['熱門報導', '台灣', '中國', '全球', '娛樂', '商業', '運動', '科技'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon><PublicIcon /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {props.children}
      </Box>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: '70px', bottom: 0, top: 'calc(100vh - 70px)' }}>
        <Toolbar sx={{
          height: '70px',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          flexDirection: 'row',
          letterSpacing: '0.6px'
        }}>
          <Stack direction={'row'} gap={2}>
            {['隱私權和Cookie', '法律聲明', '廣告', '關於我們的廣告', '說明', '意見反應'].map((data) =>
              <Typography component={Link} key={data} underline='none' color='black'>
                {data}
              </Typography>)
            }
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}