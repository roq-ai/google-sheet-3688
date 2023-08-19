import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  phone_number: yup.string().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  country: yup.string().nullable(),
  postal_code: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
