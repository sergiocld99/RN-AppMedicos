import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetDoctorByIdQuery } from "../../services/doctorListService";
import DoctorCard from "../../components/DoctorCard";
import i18n from "../../translations/i18n";
import SingleTextCard from "../../components/SingleTextCard";
import ReviewCard from "../../components/ReviewCard";
import ReviewsSection from "../../components/ReviewsSection";
import MapPreview from "../../components/MapPreview";
import LoadingManagement from "../../components/LoadingManagement";
import { colors } from "../../global/colors";
import SubmitBtn from "../../components/SubmitBtn";
import { setDoctorIdSelected, setLocationSelected } from "../../features/DoctorsSlice";
import { getFullName } from "./common";
import InternalHeader from "../../components/InternalHeader";

const DoctorDetail = ({ navigation }) => {
  const doctorId = useSelector((state) => state.doctors.value.doctorIdSelected);
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch()

  // Obtener detalles del doctor por ID
  const { data, isLoading, isError } = useGetDoctorByIdQuery(doctorId);

  useEffect(() => {
    if (data) {
      const reviewsWithComment = data.reviews.filter(review => review.comentario);
      setComments(reviewsWithComment);
    }
  }, [data])

  // Armado del nombre completo del médico
  const fullName = getFullName(data);

  // Apertura de la ubicación en el mapa
  const onOpenLocation = () => {
    dispatch(setDoctorIdSelected(data.id));
    navigation.navigate("LocationPreview", { fullName });
  };

  // Realización de un turno con el médico
  const onMakeAppointment = () => {
    dispatch(setDoctorIdSelected(data.id));
    navigation.navigate("AppointmentForm");
  };

  return (
    <View style={styles.container}>
      <InternalHeader title={getFullName(data)} navigation={navigation} />
      <LoadingManagement isLoading={isLoading} isError={isError} />
      {data ? (
        <View style={styles.infoContainer}>
          <DoctorCard doctor={data} />
          <ReviewsSection list={comments} />   
          <SubmitBtn text={i18n.t('view_location')} onPress={onOpenLocation} width="70%" />
          <SubmitBtn text={i18n.t('make_appointment')} onPress={onMakeAppointment} width="70%" />     
        </View>
      ) : (
        <Text>{i18n.t("loading")}</Text>
      )}
    </View>
  );
};

export default DoctorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  infoContainer: {
    flex: 1,
    width: "100%",
    padding: 16,
    alignItems: "center",
  },
});

