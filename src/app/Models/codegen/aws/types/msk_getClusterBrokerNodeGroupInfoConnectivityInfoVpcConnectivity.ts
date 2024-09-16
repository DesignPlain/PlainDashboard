import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication,
  msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication_GetTypes,
} from './msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication';

export interface msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
  //
  clientAuthentications?: Array<msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication>;
}

export function msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'clientAuthentications',
      '',
      () =>
        msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication_GetTypes(),
      true,
      false,
    ),
  ];
}
