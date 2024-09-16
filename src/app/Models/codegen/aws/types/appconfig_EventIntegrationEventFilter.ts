import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appconfig_EventIntegrationEventFilter {
  // Source of the events.
  source?: string;
}

export function appconfig_EventIntegrationEventFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'source',
      'Source of the events.',
      () => [],
      true,
      true,
    ),
  ];
}
