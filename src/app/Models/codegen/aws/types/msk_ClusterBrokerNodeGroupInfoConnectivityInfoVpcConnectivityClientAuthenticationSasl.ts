import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {
  //
  iam?: boolean;

  //
  scram?: boolean;
}

export function msk_ClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'iam', '', () => [], false, false),
    new DynamicUIProps(InputType.Bool, 'scram', '', () => [], false, false),
  ];
}
