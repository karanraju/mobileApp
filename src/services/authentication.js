import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import GlobalData from '../Global';

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.mero.doctor/api/v3/'}),
  endpoints: builder => ({
    login: builder.mutation({
      query: form => ({
        url: `user/checkuser`,
        method: 'POST',
        headers: {
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          ApiKey: GlobalData?.ApiKey,
          Apiversion: 'v3',
          // Use rid: '',
        },
        body: form,
        // body: {mobile_number: '9842572377', countrycode: '9 77'},
      }),
    }),

    signUp: builder.mutation({
      query: form => ({
        url: `user/signup`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: '106',
          ApiKey: '5f787a32a9629e429f936952b282d799',
        },
        body: form,
      }),
    }),

    setPassword: builder.mutation({
      query: form => ({
        url: `user/changePassword`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          ApiKey: GlobalData?.ApiKey,
          // userId: '1000399914',
        },
        body: form,
      }),
    }),

    // changeNewPassword: builder.mut ation({
    //   query : form => ({
    //     url: `user/changePassword`,
    //     method: 'PO ST',
    //     headers: {
    //       Apiversion: 'v3',
    //       Orgid: 106,
    //       ApiKey: 'd5f787a32a9629e429f936952b282d799',
    //       userId: '1000399914',
    //       Appversioncode: 56,
    //     },
    //     body: form,
    //   }),
    // }),

    changePassword: builder.mutation({
      query: form => ({
        url: `user/resetPassword`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: '106',
          ApiKey: '5f787a32a9629e429f936952b282d799',
        },
        body: form,
      }),
    }),
  }),
});

// Export hooks for usage in functiona l components, which a re
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useSignUpMutation,
  useSetPasswordMutation,
  useChangePasswordMutation,

  // useChangeNewPasswordMutation,
} = authApi;
