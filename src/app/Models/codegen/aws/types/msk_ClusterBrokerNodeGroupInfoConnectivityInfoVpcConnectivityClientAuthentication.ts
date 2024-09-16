import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl,
  msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl_GetTypes,
} from './msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl';

export interface msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
  // Configuration block for specifying SASL client authentication. See below.
  sasl?: msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl;

  // Configuration block for specifying TLS client authentication. See below.
  tls?: boolean;
}

export function msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'tls',
      'Configuration block for specifying TLS client authentication. See below.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sasl',
      'Configuration block for specifying SASL client authentication. See below.',
      () =>
        msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl_GetTypes(),
      false,
      false,
    ),
  ];
}
