import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mq_getBrokerMaintenanceWindowStartTime {
  //
  timeZone?: string;

  //
  dayOfWeek?: string;

  //
  timeOfDay?: string;
}

export function mq_getBrokerMaintenanceWindowStartTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'timeZone', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'dayOfWeek',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'timeOfDay',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
