import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess,
  msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess_GetTypes,
} from './msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess';
import {
  msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity,
  msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity_GetTypes,
} from './msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity';

export interface msk_getClusterBrokerNodeGroupInfoConnectivityInfo {
  //
  publicAccesses?: Array<msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess>;

  //
  vpcConnectivities?: Array<msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity>;
}

export function msk_getClusterBrokerNodeGroupInfoConnectivityInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'vpcConnectivities',
      '',
      () =>
        msk_getClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'publicAccesses',
      '',
      () =>
        msk_getClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess_GetTypes(),
      true,
      false,
    ),
  ];
}
