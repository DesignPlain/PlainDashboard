import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification {
  // List of Cloudwatch alarms. If any of these alarms goes into ALARM state, Instance Refresh is failed.
  alarms?: Array<string>;
}

export function autoscaling_GroupInstanceRefreshPreferencesAlarmSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'alarms',
      'List of Cloudwatch alarms. If any of these alarms goes into ALARM state, Instance Refresh is failed.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
