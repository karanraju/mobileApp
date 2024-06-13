import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import GlobalData from '../Global';
// import userFetch from '../Hooks/userFetch';

// Define a service using a base URL and ex  pe cted end points
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.mero.doctor/api/v3/'}),
  endpoints: builder => ({
    getDoctorListByName: builder.query({
      query: body => ({
        url: `doctor/doctorlist/0`,
        method: 'GET',
        headers: {
          Appversioncode: 56,
          Orgid: 614,
          ApiKey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
      }),
    }),
    getHospitalListByName: builder.mutation({
      query: body => ({
        url: `org/hospital`,
        method: 'POST',
        headers: {
          Appversioncode: 56,
          Orgid: 614,
          ApiKey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body,
      }),
    }),

    getDepartmentList: builder.mutation({
      query: body => ({
        url: `org/department`,
        method: 'POST',
        headers: {
          Appversioncode: 56,
          Orgid: 614,
          ApiKey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body,
      }),
    }),

    getDiseaseList: builder.mutation({
      query: body => ({
        url: `disease/getDisease`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body,
      }),
    }),

    getRelativesList: builder.mutation({
      query: body => ({
        url: `user/showrelatives`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
        },
        body,
      }),
    }),

    getSpecialistDoctor: builder.mutation({
      query: form => ({
        url: `doctor/doctorlist/0`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body: form,
      }),
    }),

    getPaymentBankList: builder.mutation({
      query: form =>
        // console.log('orgpasswor d', form),
        ({
          url: `org/getpayment_method/${form[0]}`,

          method: 'POST',
          headers: {
            Apiversion: 'v3',
            Appversioncode: 56,
            Orgid: 614,
            Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
          },
          body: form[1],
        }),
    }),

    getCancelAppointment: builder.mutation({
      query: form =>
        // console.log('orgpassword', fo rm),
        ({
          url: `appointments/cancelAppointment`,

          method: 'POST',
          headers: {
            Apiversion: 'v3',
            Appversioncode: 56,
            Orgid: 614,
            Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
          },
          body: form,
        }),
    }),

    getDoctorscheduleList: builder.mutation({
      query: form => ({
        url: `doctor/doctorschedule`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
        },
        body: form,
      }),
    }),

    getDoctorV1: builder.mutation({
      query: form => ({
        url: `doctor/getDoctorV1`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body: form,
      }),
    }),

    getconfirmSubscription: builder.mutation({
      query: form => ({
        url: `payment/confirmSubscription`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
        },
        body: form,
      }),
    }),

    getconfirmEsewaPayment: builder.mutation({
      query: form => ({
        url: `payment/confirmPurchase`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
        },
        body: form,
      }),
    }),

    getuserLogin: builder.mutation({
      query: form => ({
        url: `user/login`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Device: 'OnePlusIN2021',
          Appversion: '0.0.30-DEBUG',
          Appversioncode: 56,
          Machinetype: 'Android',
          IsDebug: true,
          Applicationid: 'np.com.midas.merodoctor.debug',
          Orgid: 106,
          Ipaddress: 'FE80::1812:EFFF:FE5A:85DC',
          Gcm: 'e7q6rnT2TvSN904MIcgAg4:APA91bG_R591VR61_bV4qDmebvGAue1gBCHd2YMUtyl05Xjlr8Sn5V1hFmRcoGzY98IaNcnX_qMnERBCGbRbXvac5nrrtcQNvyhpzq7AQW75HfU7FDeEdoYYWupl25bQU0AUiXVdkN23',
          Androidid: 'd69a090bfbbf7fcb',
          Imei: '00',
          Apikey: '5f787a32a9629e429f936952b282d799',
        },
        body: form,
      }),
    }),

    getsendotp: builder.mutation({
      query: form => ({
        url: `/user/sendOtp`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body: form,
      }),
    }),

    getHospitalAvailableSpecialities: builder.mutation({
      query: (id, form) => ({
        url: `org/department?orgid=${id}`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body: form,
      }),
    }),

    getAvailableAppointment: builder.mutation({
      query: form => ({
        url: `appointments/getTokendates`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body: form,
      }),
    }),

    getRelationList: builder.query({
      query: form => ({
        url: `/user/getRelationList`,
        method: 'GET',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
        },
        body: form,
      }),
    }),

    getPaymentMode: builder.mutation({
      query: form => ({
        url: `org/getpaymode`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body: form,
      }),
    }),

    getAddrelatives: builder.mutation({
      query: form => ({
        url: `/user/addrelatives`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: '106',
          Apikey: '5f787a32a9629e429f936952b282d799',
          Userid: form[1],
          Midasid: form[1],
        },
        body: form[0],
      }),
    }),

    // getAddrelatives: builder.mutation({
    //   query: form => ({
    //     url: `/user/addrelatives`,
    //     method: 'POST',
    //     headers: {
    //       Apiversion: 'v3',
    //       Appversioncode: 56,
    //       Orgid: GlobalData?.Orgid,
    //       Apikey: GlobalData?.ApiKey,
    //       // Userid: GlobalData?.Orgid
    //       // Midasid:
    //     },
    //     body: form,
    //   }),
    // }),

    getDeleteRelative: builder.mutation({
      query: form => ({
        url: `user/deleteRelative`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body: form,
      }),
    }),

    getBanner: builder.mutation({
      query: form => ({
        url: `org/banners/doctor`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
        },
        body: form,
      }),
    }),

    getUpdateUserProfile: builder.mutation({
      query: form => ({
        url: `user/updateProfile`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
        },
        body: form,
      }),
    }),

    getAllApointments: builder.mutation({
      query: data => ({
        url: `appointments/allAppointments`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
          Midasid: data[0],
          Userid: data[0],
        },
        body: data[1],
      }),
    }),

    HospitalNumber: builder.mutation({
      query: form => ({
        url: `/org/validateHospitalno`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
        },
        body: form,
      }),
    }),

    upDateAddress: builder.mutation({
      query: form => ({
        url: `user/signup3`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData.Orgid,
          Apikey: GlobalData.ApiKey,
          Userid: '1000092330',
          Midasid: '1000092330',

          // Midasid: '100001 9541',
          // Userid: dat a[0],
        },
        body: form,
      }),
    }),

    getVerifyOtp: builder.mutation({
      query: form => ({
        url: `user/verifymobile`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
          // Midasid: '1000019541',
          // Userid: data[0],
        },
        body: form,
      }),
    }),

    getValidatehospitalno: builder.mutation({
      query: form => ({
        url: `org/validatehospitalno`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 130,
          Apikey: '950b07baa418c9da8502f60e6dc97e77',
          // Midasid: '1000019541',
          // Userid: data [0],
        },
        body: form,
      }),
    }),

    getUploadImage: builder.mutation({
      query: form => ({
        url: `/user/uploadImage`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: GlobalData?.Orgid,
          Apikey: GlobalData?.ApiKey,
          mobileno: form[1],
          // Midasid: '1000019541',
          // Userid: data [0],
        },
        body: form[0],
      }),
    }),

    getSpecialitiesList: builder.mutation({
      query: body => ({
        url: `org/department?orgid=614`,
        method: 'POST',
        headers: {
          Apiversion: 'v3',
          Appversioncode: 56,
          Orgid: 614,
          Apikey: 'de3f1c39f8c03a3401303fdeb9748668',
          ContentType: 'application/json',
        },
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, w hich are
// auto-generated based on the defined endpoints
export const {
  useGetDoctorListByNameQuery,
  useGetHospitalListByNameMutation,
  useGetDepartmentListMutation,
  useGetDiseaseListMutation,
  useGetSpecialistDoctorMutation,
  useGetSpecialitiesListMutation,
  useGetRelativesListMutation,
  useGetPaymentBankListMutation,
  useGetconfirmSubscriptionMutation,
  useGetDoctorscheduleListMutation,
  useGetconfirmEsewaPaymentMutation,
  useGetuserLoginMutation,
  useGetDoctorV1Mutation,
  useGetAvailableAppointmentMutation,
  useGetHospitalAvailableSpecialitiesMutation,
  useGetsendotpMutation,
  useGetRelationListQuery,
  useGetAddrelativesMutation,
  useGetDeleteRelativeMutation,
  useGetPaymentModeMutation,
  useGetAllApointmentsMutation,
  // useGetUpdateRelativeMutation,
  useGetVerifyOtpMutation,
  useGetValidatehospitalnoMutation,
  useUpDateAddressMutation,
  useGetBannerMutation,
  useGetCancelAppointmentMutation,
  useHospitalNumberMutation,
  useGetUpdateUserProfileMutation,
  useGetUploadImageMutation,
} = pokemonApi;
