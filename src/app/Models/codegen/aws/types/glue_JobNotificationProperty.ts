import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_JobNotificationProperty {
  // After a job run starts, the number of minutes to wait before sending a job run delay notification.
  notifyDelayAfter?: number;
}

export function glue_JobNotificationProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'notifyDelayAfter',
      'After a job run starts, the number of minutes to wait before sending a job run delay notification.',
      () => [],
      false,
      false,
    ),
  ];
}
