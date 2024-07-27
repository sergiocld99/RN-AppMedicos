import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetDoctorByIdQuery } from "../../services/doctorListService";
import DoctorCard from "../../components/DoctorCard";
import i18n from "../../translations/i18n";
import SingleTextCard from "../../components/SingleTextCard";
import ReviewCard from "../../components/ReviewCard";

const DoctorDetail = ({ navigation }) => {
  const doctorId = useSelector((state) => state.doctors.value.doctorIdSelected);
  const [comments, setComments] = useState([]);

  // Obtener detalles del doctor por ID
  const { data, isLoading, isError } = useGetDoctorByIdQuery(doctorId);

  useEffect(() => {
    if (data) {
      const reviewsWithComment = data.reviews.filter(review => review.comentario);
      setComments(reviewsWithComment);
    }
  }, [data])

  return (
    <View>
      {data ? (
        <View>
          <DoctorCard doctor={data} />
          <Text style={styles.title}>{i18n.t("reviews")}</Text>
          <FlatList data={comments} keyExtractor={item => item.comentario} renderItem={
            ({ item }) => (
              <ReviewCard review={item} />
            )
          } />
        </View>
      ) : (
        <Text>{i18n.t("loading")}</Text>
      )}
    </View>
  );
};

export default DoctorDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
    textAlign: "center",
  },
});
