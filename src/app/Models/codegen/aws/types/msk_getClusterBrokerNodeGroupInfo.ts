import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_getClusterBrokerNodeGroupInfoConnectivityInfo,
  msk_getClusterBrokerNodeGroupInfoConnectivityInfo_GetTypes,
} from './msk_getClusterBrokerNodeGroupInfoConnectivityInfo';
import {
  msk_getClusterBrokerNodeGroupInfoStorageInfo,
  msk_getClusterBrokerNodeGroupInfoStorageInfo_GetTypes,
} from './msk_getClusterBrokerNodeGroupInfoStorageInfo';

export interface msk_getClusterBrokerNodeGroupInfo {
  //
  azDistribution?: string;

  //
  clientSubnets?: Array<string>;

  //
  connectivityInfos?: Array<msk_getClusterBrokerNodeGroupInfoConnectivityInfo>;

  //
  instanceType?: string;

  //
  securityGroups?: Array<string>;

  //
  storageInfos?: Array<msk_getClusterBrokerNodeGroupInfoStorageInfo>;
}

export function msk_getClusterBrokerNodeGroupInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'clientSubnets',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'connectivityInfos',
      '',
      () => msk_getClusterBrokerNodeGroupInfoConnectivityInfo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'securityGroups',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'storageInfos',
      '',
      () => msk_getClusterBrokerNodeGroupInfoStorageInfo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'azDistribution',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
