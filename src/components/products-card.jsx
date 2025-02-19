import {
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ProductsCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleCardClick = (title) => {
    if (title === "BIO") {
      navigate("/biorhiza-endo");
    }
    if (title === "PROMOTOR") {
      navigate("/promotor-plus");
    }
    if (title === "AMIN") {
      navigate("/amin-gpb");
    }
  };
  return (
    <Grid2
      container
      spacing={4}
      justifyContent="center"
      sx={{ marginTop: "4rem", marginBottom: "4rem" }}
    >
      <Grid2 item xs={12} sm={4}>
        <Card
          sx={{
            maxWidth: 345,
            minHeight: 260,
            cursor: "pointer",
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          onClick={() => handleCardClick("BIO")}
        >
          <CardMedia
            component="img"
            height="50%"
            width="50%"
            image="/static/logo-png.png"
            alt={"BIORIZHA_ENDO"}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography className="products-card-title" align="center">
              {t("productsCard.product-title-1")}
            </Typography>
            <Typography className="products-card-text" align="center">
              {t("productsCard.product-text-1")}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={4}>
        <Card
          sx={{
            maxWidth: 345,
            minHeight: 250,
            cursor: "pointer",
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          onClick={() => handleCardClick("PROMOTOR")}
        >
          <CardMedia
            component="img"
            height="50%"
            width="50%"
            image="/static/logo-png.png"
            alt={"PROMOTOR PLUS"}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography className="products-card-title" align="center">
              {t("productsCard.product-title-2")}
            </Typography>
            <Typography className="products-card-text" align="center">
              {t("productsCard.product-text-2")} <br />{" "}
              {t("productsCard.product-text-2-2")}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={4}>
        <Card
          sx={{
            maxWidth: 345,
            minHeight: 250,
            cursor: "pointer",
            borderRadius: 2,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
          onClick={() => handleCardClick("AMIN")}
        >
          <CardMedia
            component="img"
            height="50%"
            width="50%"
            image="/static/logo-png.png"
            alt={"AMIN GPB"}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography className="products-card-title" align="center">
              {t("productsCard.product-title-3")}
            </Typography>
            <Typography className="products-card-text" align="center">
              {t("productsCard.product-text-3")} <br />{" "}
              {t("productsCard.product-text-3-2")}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default ProductsCard;
