import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudwatch_EventEndpointRoutingConfigFailoverConfig,
  cloudwatch_EventEndpointRoutingConfigFailoverConfig_GetTypes,
} from './cloudwatch_EventEndpointRoutingConfigFailoverConfig';

export interface cloudwatch_EventEndpointRoutingConfig {
  // Parameters used for failover. This includes what triggers failover and what happens when it's triggered. Documented below.
  failoverConfig?: cloudwatch_EventEndpointRoutingConfigFailoverConfig;
}

export function cloudwatch_EventEndpointRoutingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'failoverConfig',
      "Parameters used for failover. This includes what triggers failover and what happens when it's triggered. Documented below.",
      () => cloudwatch_EventEndpointRoutingConfigFailoverConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
