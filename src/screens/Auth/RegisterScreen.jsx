import { View, Text, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../../components/InputForm";
import SubmitBtn from "../../components/SubmitBtn";
import i18n from "../../translations/i18n";
import { localLogin, styles } from "./common";
import { registerSchema } from "../../validations/credentialsSchema";
import { useRegisterMutation } from "../../services/authService";
import { useDispatch } from "react-redux";

const RegisterScreen = ({ navigation }) => {
  // Valores de los campos de registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Mensajes de error
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  // Hook de registro en Firebase
  const [triggerRegister, mutationResult] = useRegisterMutation();

  // Hook de despacho de acciones
  const dispatch = useDispatch();

  useEffect(() => {
    if (mutationResult.isSuccess) {
      localLogin({ mutationResult, dispatch });
    } else if (mutationResult.isError) {
      console.log("Error al registrar el usuario:", mutationResult.error);
    }
  }, [mutationResult]);

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

      // Registrar el usuario en Firebase
      triggerRegister({ email, password, returnSecureToken: true });

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
      <Image source={require('../../../assets/logo.png')} style={styles.image} resizeMode='cover' />
      
      <InputForm
        label={i18n.t("email")}
        error={errorEmail}
        onChange={setEmail}
        autoCompleteType="email"
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
