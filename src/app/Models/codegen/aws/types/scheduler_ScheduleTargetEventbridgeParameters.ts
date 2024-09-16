import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface scheduler_ScheduleTargetEventbridgeParameters {
  // Source of the event.
  source?: string;

  // Free-form string used to decide what fields to expect in the event detail. Up to 128 characters.
  detailType?: string;
}

export function scheduler_ScheduleTargetEventbridgeParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'source',
      'Source of the event.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'detailType',
      'Free-form string used to decide what fields to expect in the event detail. Up to 128 characters.',
      () => [],
      true,
      false,
    ),
  ];
}
