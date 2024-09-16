import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataloss_PreventionJobTriggerTriggerSchedule {
  /*
With this option a job is started a regular periodic basis. For example: every day (86400 seconds).
A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.
This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

- - -
*/
  recurrencePeriodDuration?: string;
}

export function dataloss_PreventionJobTriggerTriggerSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'recurrencePeriodDuration',
      'With this option a job is started a regular periodic basis. For example: every day (86400 seconds).\nA scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.\nThis value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.\nA duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: "3.5s".\n\n- - -',
      () => [],
      false,
      false,
    ),
  ];
}
