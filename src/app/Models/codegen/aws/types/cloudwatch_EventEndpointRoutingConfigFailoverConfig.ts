import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary,
  cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary_GetTypes,
} from './cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary';
import {
  cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary,
  cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary_GetTypes,
} from './cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary';

export interface cloudwatch_EventEndpointRoutingConfigFailoverConfig {
  // Parameters used for the primary Region. Documented below.
  primary?: cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary;

  // Parameters used for the secondary Region, the Region that events are routed to when failover is triggered or event replication is enabled. Documented below.
  secondary?: cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary;
}

export function cloudwatch_EventEndpointRoutingConfigFailoverConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'primary',
      'Parameters used for the primary Region. Documented below.',
      () =>
        cloudwatch_EventEndpointRoutingConfigFailoverConfigPrimary_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'secondary',
      'Parameters used for the secondary Region, the Region that events are routed to when failover is triggered or event replication is enabled. Documented below.',
      () =>
        cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary_GetTypes(),
      true,
      false,
    ),
  ];
}
