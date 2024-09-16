import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule {
  // Specifies the frequency for the operation, using the unix-cron format.
  schedule?: string;
}

export function compute_ResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'schedule',
      'Specifies the frequency for the operation, using the unix-cron format.',
      () => [],
      true,
      true,
    ),
  ];
}
