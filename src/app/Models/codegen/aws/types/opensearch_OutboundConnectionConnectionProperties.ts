import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch,
  opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch_GetTypes,
} from './opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch';

export interface opensearch_OutboundConnectionConnectionProperties {
  // Configuration block for cross cluster search.
  crossClusterSearch?: opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch;

  // The endpoint of the remote domain, is only set when `connection_mode` is `VPC_ENDPOINT` and `accept_connection` is `TRUE`.
  endpoint?: string;
}

export function opensearch_OutboundConnectionConnectionProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'crossClusterSearch',
      'Configuration block for cross cluster search.',
      () =>
        opensearch_OutboundConnectionConnectionPropertiesCrossClusterSearch_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'endpoint',
      'The endpoint of the remote domain, is only set when `connection_mode` is `VPC_ENDPOINT` and `accept_connection` is `TRUE`.',
      () => [],
      false,
      false,
    ),
  ];
}
