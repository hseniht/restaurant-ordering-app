import Typography from "@mui/material/Typography";

const MealItem = ({ name, description, price }) => {
  const prices = `$${price.toFixed(2)}`;
  return (
    <li>
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2">{description}</Typography>
      <Typography
        component="div"
        sx={{ fontWeight: "bold" }}
        color="text.secondary"
        gutterBottom
      >
        {price}
      </Typography>
    </li>
  );
};

export default MealItem;
