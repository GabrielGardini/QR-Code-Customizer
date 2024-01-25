import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  dotsOptions: {
    color: "#4267b2",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

function App() {
  const [url, setUrl] = useState("");
  const [fileExt, setFileExt] = useState("png");
  const [colorType, setColorType] = useState("linear");
  const ref = useRef(null);

  const matches = useMediaQuery("(min-width:1300px)");

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onLogoChange = (event) => {
    qrCode.update({
      image: event,
    });
  };
  const onWidthChange = (event) => {
    if (event.target.value >= 30) {
      qrCode.update({
        width: event.target.value,
      });
    }
  };
  const onHeightChange = (event) => {
    if (event.target.value >= 30) {
      qrCode.update({
        height: event.target.value,
      });
    }
  };
  const onMarginChange = (event) => {
    qrCode.update({
      margin: event.target.value,
    });
  };
  const onDotsStyleChange = (event) => {
    qrCode.update({
      dotsOptions: {
        type: event.target.value,
      },
    });
  };

  const onColorChange = (event) => {
    qrCode.update({
      dotsOptions: {
        color: event.target.value,
      },
    });
  };

  const onCornersStyleChange = (event) => {
    qrCode.update({
      cornersSquareOptions: {
        type: event.target.value === "none" ? "" : event.target.value,
      },
    });
  };

  const onCornerColorChange = (event) => {
    qrCode.update({
      cornersSquareOptions: {
        color: event.target.value,
      },
    });
  };

  const onCornersDotStyleChange = (event) => {
    qrCode.update({
      cornersDotOptions: {
        type: event.target.value === "none" ? "" : event.target.value,
      },
    });
  };

  const onCornerDotColorChange = (event) => {
    qrCode.update({
      cornersDotOptions: {
        color: event.target.value,
      },
    });
  };

  const onBackgroundColorChange = (event) => {
    qrCode.update({
      backgroundOptions: {
        color: event.target.value,
      },
    });
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt,
    });
  };

  const NavigateToPortfolio = () => {
    window.open("https://portfolio-gabrielgardini.vercel.app");
  };

  return (
    <div
      className="app"
      style={{
        fontFamily: "System-ui",
        color: "white",
      }}
    >
      <Box
        // className="card"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mb: 6,
          bgcolor: "#1975d2",
        }}
      >
        <Box
          sx={{
            width: matches ? "60%" : "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontFamily={"System-ui"}
            sx={{ marginY: 3 }}
            variant={matches ? "h4" : "h6"}
          >
            QR Code Customizado
          </Typography>
          <Typography
            onClick={() => {
              NavigateToPortfolio();
            }}
            fontFamily={"System-ui"}
            sx={{ marginY: 3, cursor: "pointer" }}
            variant={matches ? "h4" : "h6"}
          >
            Sobre Mim
          </Typography>
        </Box>
      </Box>
      <Box>
        {/* <Typography fontFamily={"System-ui"} sx={{ marginY: 6 }} variant="h1">
          Crie seu QR Code customizado!
        </Typography> */}
      </Box>
      <Grid
        container
        gap={2}
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item lg={5} md={12} xs={12}>
          <Card
            className="card"
            fontFamily={"System-ui"}
            sx={{
              padding: 5,
              // bgcolor: "#f4f7fa",
              // bgcolor: "#8bbae5",
              bgcolor: "#1975d2",
              borderRadius: 3,
              color: "white",
            }}
          >
            <Typography
              fontFamily={"System-ui"}
              variant={matches ? "h3" : "h4"}
            >
              Ter um QR code do seu jeito nunca foi tão fácil!
            </Typography>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Accordion sx={{ mt: 2, bgcolor: "#ffffff" }} defaultExpanded>
              <AccordionSummary
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography fontFamily={"System-ui"} variant="h4">
                  Opções Principais
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  sx={{ width: "100%" }}
                  onChange={(e) => onUrlChange(e)}
                  label="Link"
                  variant="outlined"
                />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <TextField
                    type="number"
                    sx={{ width: "30%" }}
                    label="Largura (min 30)"
                    variant="outlined"
                    onChange={(e) => onWidthChange(e)}
                  />
                  <TextField
                    sx={{ width: "30%" }}
                    label="Altura (min 30)"
                    variant="outlined"
                    onChange={(e) => onHeightChange(e)}
                    type="number"
                  />
                  <TextField
                    type="number"
                    sx={{ width: "30%" }}
                    label="Margem"
                    variant="outlined"
                    onChange={(e) => onMarginChange(e)}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <TextField
                    sx={{ width: "100%", mt: 2 }}
                    type="text"
                    onChange={(e) => onLogoChange(e.target.value)}
                    label="Link da Logo"
                    variant="outlined"
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "#ffffff" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography fontFamily={"System-ui"} variant="h4">
                  Opções Dos Pontos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Estilo dos Pontos
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Estilo dos Pontos"
                    onChange={(e) => onDotsStyleChange(e)}
                    defaultValue={"rounded"}
                  >
                    <MenuItem value={"rounded"}>Arredondado</MenuItem>
                    <MenuItem value={"dots"}>Pontos</MenuItem>
                    <MenuItem value={"classy"}>Classy</MenuItem>
                    <MenuItem value={"classy-rounded"}>
                      Classy Arredondado
                    </MenuItem>
                    <MenuItem value={"square"}>Quadrado</MenuItem>
                    <MenuItem value={"extra-rounded"}>
                      Extra Arredondado
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Estilo das Cores
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Estilo das Cores"
                    onChange={(e) => setColorType(e)}
                    defaultValue={"linear"}
                  >
                    <MenuItem value={"linear"}>Linear</MenuItem>
                    {/* <MenuItem value={"gradient"}>Gradiente</MenuItem> */}
                  </Select>
                </FormControl>
                {colorType === "linear" ? (
                  <>
                    <InputLabel id="demo-simple-select-label">
                      Cor dos Pontos
                    </InputLabel>
                    <TextField
                      sx={{ width: "100%" }}
                      onChange={(e) => onColorChange(e)}
                      variant="outlined"
                      type="color"
                    />
                  </>
                ) : null}
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "#ffffff" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography fontFamily={"System-ui"} variant="h4">
                  Opções Dos Cantos
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid gap={2} container>
                  <Grid item md={5} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Estilo dos Cantos
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Estilo dos Cantos"
                        onChange={(e) => onCornersStyleChange(e)}
                        defaultValue={"none"}
                      >
                        <MenuItem value={"none"}>Padrão</MenuItem>
                        <MenuItem value={"dot"}>Pontos</MenuItem>
                        <MenuItem value={"square"}>Quadrado</MenuItem>
                        <MenuItem value={"extra-rounded"}>
                          Extra Arredondado
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <InputLabel id="demo-simple-select-label">
                        Estilo das Cores
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Estilo das Cores"
                        onChange={(e) => setColorType(e)}
                        defaultValue={"linear"}
                      >
                        <MenuItem value={"linear"}>Linear</MenuItem>
                        {/* <MenuItem value={"gradient"}>Gradiente</MenuItem> */}
                      </Select>
                    </FormControl>
                    {colorType === "linear" ? (
                      <>
                        <InputLabel id="demo-simple-select-label">
                          Cor dos Cantos
                        </InputLabel>
                        <TextField
                          sx={{ width: "100%" }}
                          onChange={(e) => onCornerColorChange(e)}
                          variant="outlined"
                          type="color"
                        />
                      </>
                    ) : null}
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Estilo dos Pontos
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Estilo dos Pontos"
                        onChange={(e) => onCornersDotStyleChange(e)}
                        defaultValue={"none"}
                      >
                        <MenuItem value={"none"}>Padrão</MenuItem>
                        <MenuItem value={"dot"}>Pontos</MenuItem>
                        <MenuItem value={"square"}>Quadrado</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <InputLabel id="demo-simple-select-label">
                        Estilo das Cores
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Estilo das Cores"
                        onChange={(e) => setColorType(e)}
                        defaultValue={"linear"}
                      >
                        <MenuItem value={"linear"}>Linear</MenuItem>
                        {/* <MenuItem value={"gradient"}>Gradiente</MenuItem> */}
                      </Select>
                    </FormControl>
                    {colorType === "linear" ? (
                      <>
                        <InputLabel id="demo-simple-select-label">
                          Cor dos Pontos
                        </InputLabel>
                        <TextField
                          sx={{ width: "100%" }}
                          onChange={(e) => onCornerDotColorChange(e)}
                          variant="outlined"
                          type="color"
                        />
                      </>
                    ) : null}
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                borderBottomLeftRadius: 3,
                borderBottomRightRadius: 3,
                bgcolor: "#ffffff",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography fontFamily={"System-ui"} variant="h4">
                  Opções Do Fundo
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Estilo das Cores
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Estilo das Cores"
                    onChange={(e) => setColorType(e)}
                    defaultValue={"linear"}
                  >
                    <MenuItem value={"linear"}>Linear</MenuItem>
                    {/* <MenuItem value={"gradient"}>Gradiente</MenuItem> */}
                  </Select>
                </FormControl>
                {colorType === "linear" ? (
                  <>
                    <InputLabel id="demo-simple-select-label">
                      Cor do Fundo
                    </InputLabel>
                    <TextField
                      sx={{ width: "100%" }}
                      onChange={(e) => onBackgroundColorChange(e)}
                      variant="outlined"
                      type="color"
                      defaultValue={"#ffffff"}
                    />
                  </>
                ) : null}
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
        <Grid item lg={5} md={12} xs={12}>
          <div ref={ref} />
          {url !== "" ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                borderRadius: 3,
                mt: 2,
                // bgcolor: "#ffffff",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  width: "35%",
                  display: "flex",
                  flexDirection: "column",
                  // justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <FormControl fullWidth sx={{ mt: 2, width: "90%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Extensão do Arquivo
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Extensão do Arquivo"
                    onChange={(e) => onExtensionChange(e)}
                    defaultValue={"png"}
                  >
                    <MenuItem value={"png"}>PNG</MenuItem>
                    <MenuItem value={"svg"}>SVG</MenuItem>
                    <MenuItem value={"jpeg"}>JPEG</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  sx={{ width: "90%", mt: 1, mb: 2 }}
                  onClick={() => onDownloadClick()}
                >
                  Download
                </Button>
              </Box>
            </Box>
          ) : null}
        </Grid>
      </Grid>
      {/* <Box className="card" sx={{ width: "100%", mt: 2.2 }}>
      <Typography
          fontFamily={"System-ui"}
          sx={{ marginY: 2, textAlign: "center" }}
          variant="h6"
          >
          Gabriel Gardini @ 2024
          </Typography>
        </Box> */}
    </div>
  );
}

export default App;
