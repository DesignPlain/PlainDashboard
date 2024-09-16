import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
  //
  enabled?: boolean;

  //
  volumeThroughput?: number;
}

export function msk_getClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'enabled', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      'volumeThroughput',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
