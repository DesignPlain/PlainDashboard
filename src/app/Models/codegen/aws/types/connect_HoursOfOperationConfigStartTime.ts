import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface connect_HoursOfOperationConfigStartTime {
  // Specifies the minute of opening.
  minutes?: number;

  // Specifies the hour of opening.
  hours?: number;
}

export function connect_HoursOfOperationConfigStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'minutes',
      'Specifies the minute of opening.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'hours',
      'Specifies the hour of opening.',
      () => [],
      true,
      false,
    ),
  ];
}
