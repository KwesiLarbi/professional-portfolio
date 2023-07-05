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
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// TODO: Remove initial create-react files and styles (done)
// TODO: Remove initial code out of app file (done)
// TODO: Add Image (done)
// TODO: Add about me section (done)
// TODO: Add skills section (done)
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

const skillsData = [
  "JavaScript", 
  "TypeScript", 
  "Node.js", 
  "React.js", 
  "MongoDB", 
  "Postgres", 
  "Go"
];

const Img = styled('img')({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
})

// Components
function AutoScrollHorizontalList({ skills }) {
  return (
    <>
      {skills.map((skill) => (
        <Typography key={skill}>{skill}</Typography>
      ))}
    </>
  );
}

// Sections
function SkillsSection() {
  return (
    <Box>
      <Typography>My Skills</Typography>
      <AutoScrollHorizontalList skills={skillsData} />
    </Box>
  );
}

function AboutMeSection() {
  return (
    <Box
      sx={{
        pt: 8,
        pb: 6,
        flexGrow: 1
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item>
            <Img src="/images/kwesi_image.jpeg" alt="Kwesi Larbi" />
          </Grid>
          <Grid item xs={12} md container>
            <Grid item xs container direction="column" spacing={2}>
              <Typography
                variant="h2"
                align="left"
                color="text.primary"
                gutterBottom
              >
                Kwesi Larbi
              </Typography>
              <Typography variant="h5" align="left" color="text.secondary" paragraph>
                Dolor morbi non arcu risus quis. Vitae tempus quam pellentesque nec nam. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nisi scelerisque eu ultrices vitae auctor.
              </Typography>
            </Grid>
            <Grid item>
              <SkillsSection />
              <Button variant="contained">Download My Resume</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

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
        <AboutMeSection />
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
