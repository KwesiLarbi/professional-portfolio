import { 
  Typography, 
  Link, 
  CssBaseline, 
  AppBar, 
  Toolbar, 
  Box, 
  Container, 
  Stack, 
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO: Remove initial create-react files and styles (done)
// TODO: Remove initial code out of app file (done)
// TODO: Add Image
// TODO: Add about me section
// TODO: Add skills section
// TODO: Create button where resume can be downloaded as PDF
// TODO: Create GitHub section
// TODO: GET GitHub data (contributions, repositories)
// TODO: Create heat map similar to github showing contributions
// TODO: GET total contributions and display above Heatmap
// TODO: Have repositories listed in column format on the left of heatmap

function Copyright() {
  return (
    <Typography>
      <Link>
        Kwesi Larbi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function MyLogo() {
  return (
    <Typography variant="h5">
      <Link href="/" color="#FFFF">
        K.
      </Link>
    </Typography>
  );
}

const defaultTheme = createTheme();

const projectData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function ProfesionalPortfolio() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MyLogo />
        </Toolbar>
      </AppBar>
      <main>
        {/* First Section */}
        <Box
          sx={{
            pt: 8,
            pb: 6
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Kwesi Larbi
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        {/* End of First Section */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {projectData.map((project) => (
              <Grid item key={project} sx={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardMedia 
                    component="div"
                    sx={{
                      pt: '56.25%'
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End of Footer */}
    </ThemeProvider>
  );
}

function App() {
  return <ProfesionalPortfolio />;
}

export default App;
