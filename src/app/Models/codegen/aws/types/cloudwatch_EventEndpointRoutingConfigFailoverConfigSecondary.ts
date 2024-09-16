import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary {
  // The name of the secondary Region.
  route?: string;
}

export function cloudwatch_EventEndpointRoutingConfigFailoverConfigSecondary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'route',
      'The name of the secondary Region.',
      () => [],
      false,
      false,
    ),
  ];
}
