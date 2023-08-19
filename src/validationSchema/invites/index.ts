import * as yup from 'yup';

export const inviteValidationSchema = yup.object().shape({
  status: yup.string().required(),
  invited_by: yup.string().nullable(),
  invited_to: yup.string().nullable(),
});
