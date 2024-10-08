import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface msk_ClusterConfigurationInfo {
  // Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
  arn?: string;

  // Revision of the MSK Configuration to use in the cluster.
  revision?: number;
}

export function msk_ClusterConfigurationInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'revision',
      'Revision of the MSK Configuration to use in the cluster.',
      () => [],
      true,
      false,
    ),
  ];
}
