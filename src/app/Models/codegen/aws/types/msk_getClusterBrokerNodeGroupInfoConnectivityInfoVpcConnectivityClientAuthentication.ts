import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl,
  msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl_GetTypes,
} from './msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl';

export interface msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
  //
  sasls?: Array<msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl>;

  //
  tls?: boolean;
}

export function msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'sasls',
      '',
      () =>
        msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, 'tls', '', () => [], true, false),
  ];
}
