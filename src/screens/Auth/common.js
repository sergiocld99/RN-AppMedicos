import { StyleSheet } from "react-native";
import { login } from "../../features/UserSlice";
import { insertSession } from "../../databases/Local";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  underlinedLink: {
    marginTop: 16,
    textDecorationLine: 'underline',
  }
});

/**
 * Actualización de State y guardado de sesión en la base de datos local.
 */
export const localLogin = ({ mutationResult, dispatch }) => {
  let { email, localId, idToken } = mutationResult.data;

  // Despachar la acción de login con los datos del usuario registrado
  dispatch(login({ email, localId, idToken }));

  // Guardar sesión en la base de datos local
  insertSession({localId, email, token: idToken})
    .then(() => console.log("Sesión guardada en la base de datos local"))
    .catch((error) =>
      console.log("Error al guardar la sesión en la base de datos local:", error)
    );
}