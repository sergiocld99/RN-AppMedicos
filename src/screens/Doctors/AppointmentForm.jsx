import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetDoctorByIdQuery,
  usePostAppointmentMutation,
} from "../../services/doctorListService";
import { getFullName } from "./common";
import InputForm from "../../components/InputForm";
import SubmitBtn from "../../components/SubmitBtn";
import i18n from "../../translations/i18n";
import { appointmentSchema } from "../../validations/credentialsSchema";
import DateTimePicker from "@react-native-community/datetimepicker";
import InternalHeader from "../../components/InternalHeader";

const AppointmentForm = ({ navigation }) => {
  // Obtener el ID del médico seleccionado del state
  const doctorIdSelected = useSelector(
    (state) => state.doctors.value.doctorIdSelected
  );

  // Obtener ID del usuario logueado del state
  const localId = useSelector((state) => state.auth.value.localId);

  // Estado del formulario
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timestamp, setTimestamp] = useState(new Date());

  // Estado de los mensajes de error
  const [errorDate, setErrorDate] = useState("");
  const [errorTime, setErrorTime] = useState("");

  // Visibilidad de los selectores de fecha y hora
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  // Obtener detalles del médico por ID
  const { data } = useGetDoctorByIdQuery(doctorIdSelected);

  // Hook de posteo del turno en Firebase
  const [triggerPostAppointment, postAppointmentResult] =
    usePostAppointmentMutation();

  // Regreso a la pantalla principal al enviar el turno
  useEffect(() => {
    if (postAppointmentResult.isSuccess) {
      navigation.navigate("Specialties");
    }
  }, [postAppointmentResult]);

  // Fecha de mañana
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Listener para el cambio de fecha
  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);

    if (selectedDate) {
      const datePart = selectedDate.toLocaleDateString("es-AR");
      setDate(datePart);
      setTimestamp(
        (currValue) =>
          new Date(
            currValue.setFullYear(
              selectedDate.getFullYear(),
              selectedDate.getMonth(),
              selectedDate.getDate()
            )
          )
      );
      setErrorDate("");
    }
  };

  // Listener para el cambio de hora
  const onChangeTime = (event, selectedTime) => {
    setShowTimePicker(false);

    if (selectedTime) {
      const timePart = selectedTime.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(timePart);
      setTimestamp(
        (currValue) =>
          new Date(
            currValue.setHours(
              selectedTime.getHours(),
              selectedTime.getMinutes()
            )
          )
      );
      setErrorTime("");
    }
  };

  // Envío del formulario
  const onConfirm = () => {
    // Validar los campos requeridos
    appointmentSchema
      .validate({ date, time }, { abortEarly: false })
      .then(() => {
        // Los datos son válidos
        triggerPostAppointment({
          doctorId: doctorIdSelected,
          date,
          time,
          timestamp,
          userId: localId,
        });
      })
      .catch((error) => {
        // Al menos un dato es inválido
        error.inner.forEach((err) => {
          if (err.path === "date") setErrorDate(err.message);
          if (err.path === "time") setErrorTime(err.message);
        });
      });
  };

  return (
    <View style={styles.container}>
      <InternalHeader title={getFullName(data)} navigation={navigation} />
      <Image
        source={require("../../../assets/logo.png")}
        style={{ width: 100, height: 100, marginVertical: 16 }}
      />
      <InputForm
        label={i18n.t("date")}
        placeholder={i18n.t("select_date")}
        onPress={() => setShowDatePicker(true)}
        editable={false}
        fixedValue={date}
        error={errorDate}
      />

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={tomorrow}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
          minimumDate={tomorrow}
        />
      )}

      <InputForm
        label={i18n.t("time")}
        placeholder={i18n.t("select_time")}
        onPress={() => setShowTimePicker(true)}
        editable={false}
        fixedValue={time}
        error={errorTime}
      />

      {showTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChangeTime}
        />
      )}

      <SubmitBtn text={i18n.t("confirm")} onPress={onConfirm} />
    </View>
  );
};

export default AppointmentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center",
  },
});
