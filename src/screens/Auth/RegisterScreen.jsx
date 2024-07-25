import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import SubmitBtn from "../../components/SubmitBtn";
import i18n from "../../translations/i18n";
import { styles } from "./common";
import { registerSchema } from "../../validations/credentialsSchema";

const RegisterScreen = ({ navigation }) => {
  // Valores de los campos de registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Mensajes de error
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // Limpieza de mensajes de error
  const clearErrors = () => {
    setErrorEmail("");
    setErrorPassword("");
    setErrorConfirmPassword("");
  };

  const handleRegister = () => {
    clearErrors();

    try {
      // Validar todos los datos del formulario
      registerSchema.validateSync(
        { email, password, confirmPassword },
        { abortEarly: false }
      );

      console.log("Registro exitoso");
    } catch (error) {
      // Mostrar cada mensaje de error en el campo correspondiente
      if (error.inner) for (let i = 0; i < error.inner.length; i++) {
        let path = error.inner[i].path;
        let msg = error.inner[i].message;

        switch (path) {
          case "email":
            setErrorEmail(msg);
            break;
          case "password":
            setErrorPassword(msg);
            break;
          case "confirmPassword":
            setErrorConfirmPassword(msg);
            break;
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <InputForm
        label={i18n.t("email")}
        error={errorEmail}
        onChange={setEmail}
      />
      <InputForm
        label={i18n.t("password")}
        error={errorPassword}
        isSecure
        onChange={setPassword}
      />
      <InputForm
        label={i18n.t("confirmPassword")}
        error={errorConfirmPassword}
        isSecure
        onChange={setConfirmPassword}
      />
      <SubmitBtn onPress={handleRegister} text={i18n.t("register")} />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.underlinedLink}>
          {i18n.t("alreadyHaveAccount")}
        </Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen;
