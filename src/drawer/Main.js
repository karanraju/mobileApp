import {Text, View} from 'react-native';
import {BottonNavigator} from '../button/BottonNavigator';
import {useGetHospitalAvailableSpecialitiesMutation} from '../services/pokemon';
import GlobalData from '../Global';
import {useEffect} from 'react';

export const Main = () => {
  const [
    getHospitalAvailableSpecialities,
    {data: hospitalAvailableSpecialities, isLoading},
  ] = useGetHospitalAvailableSpecialitiesMutation();

  const id = GlobalData?.Orgid;

  useEffect(() => {
    // console.log('dataaaaaitemm', data?.response );
    const form = new FormData();
    form.append('type', 'GENERAL');
    form.append('showall', 'Y');
    form.append('hospital', GlobalData?.Orgid);
    console.log('formDataValue', form);
    getHospitalAvailableSpecialities(id, form);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>dkjfjdhfdu</Text>
    </View>
  );
};
