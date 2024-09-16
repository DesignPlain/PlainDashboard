import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elasticsearch_getDomainClusterConfigZoneAwarenessConfig {
  // Number of availability zones used.
  availabilityZoneCount?: number;
}

export function elasticsearch_getDomainClusterConfigZoneAwarenessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'availabilityZoneCount',
      'Number of availability zones used.',
      () => [],
      true,
      false,
    ),
  ];
}
