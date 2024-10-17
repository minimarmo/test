import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      {/* AppBar สำหรับแถบเมนู */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My MUI App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Container สำหรับเนื้อหาหลัก */}
      <Container>
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Welcome to My MUI App with TypeScript!
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is a simple React app using Material-UI for design and
            TypeScript for type safety.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default App;
