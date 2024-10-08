import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary {
  // The ARN of the health check used by the endpoint to determine whether failover is triggered.
  healthCheck?: string;
}

export function cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'healthCheck',
      'The ARN of the health check used by the endpoint to determine whether failover is triggered.',
      () => [],
      false,
      false,
    ),
  ];
}
