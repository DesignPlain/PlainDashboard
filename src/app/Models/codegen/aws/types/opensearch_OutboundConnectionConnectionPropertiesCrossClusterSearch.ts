import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch {
  // Skips unavailable clusters and can only be used for cross-cluster searches. Accepted values are `ENABLED` or `DISABLED`.
  skipUnavailable?: string;
}

export function opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'skipUnavailable',
      'Skips unavailable clusters and can only be used for cross-cluster searches. Accepted values are `ENABLED` or `DISABLED`.',
      () => [],
      false,
      true,
    ),
  ];
}
