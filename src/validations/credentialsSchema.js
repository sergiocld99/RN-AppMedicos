import { object, ref, string } from "yup";
import i18n from "../translations/i18n";
import { PASSWORD_MIN_LENGTH } from "../constants";

export const loginSchema = object().shape({
  email: string()
    .email(i18n.t("emailInvalid"))
    .required(i18n.t("emailRequired")),
  password: string()
    .required(i18n.t("passwordRequired")),
});

export const registerSchema = object().shape({
  email: string()
    .email(i18n.t("emailInvalid"))
    .required(i18n.t("emailRequired")),
  password: string()
    .min(PASSWORD_MIN_LENGTH, i18n.t("passwordMinRequired"))
    .required(i18n.t("passwordRequired")),
  confirmPassword: string()
    .oneOf([ref("password"), null], i18n.t("passwordsMustMatch"))
    .required(i18n.t("confirmPasswordRequired")),
});

export const appointmentSchema = object().shape({
  date: string().required(i18n.t("date_required")),
  time: string().required(i18n.t("time_required")),
});