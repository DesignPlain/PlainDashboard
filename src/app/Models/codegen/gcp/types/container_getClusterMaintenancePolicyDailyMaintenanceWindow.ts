import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_getClusterMaintenancePolicyDailyMaintenanceWindow {
  //
  duration?: string;

  //
  startTime?: string;
}

export function container_getClusterMaintenancePolicyDailyMaintenanceWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'duration', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'startTime',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
