import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeCart, getCart, removeCart } from "../../api/firebase";
import { useUserContext } from "../../context/UserContext";

function CartHooks() {
  const { uid } = useUserContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {});

  const ChangeCartBag = useMutation(
    ({ id, cart, selectOption }) => changeCart(uid, id, cart, selectOption),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );

  const DeleteCartBag = useMutation(
    ({ id, selectOption }) => removeCart(uid, id, selectOption),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );

  return { cartQuery, ChangeCartBag, DeleteCartBag };
}

export default CartHooks;
