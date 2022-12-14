import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function CartWidget({ cartCount }) {
  return (
    <Badge className="cart" color="secondary" badgeContent={cartCount}>
      <ShoppingCartIcon fontSize="large"/>
    </Badge>
  );
}

export default CartWidget;
