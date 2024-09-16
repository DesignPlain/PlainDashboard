import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appintegrations_getEventIntegrationEventFilter {
  // The source of the events.
  source?: string;
}

export function appintegrations_getEventIntegrationEventFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'source',
      'The source of the events.',
      () => [],
      true,
      false,
    ),
  ];
}
