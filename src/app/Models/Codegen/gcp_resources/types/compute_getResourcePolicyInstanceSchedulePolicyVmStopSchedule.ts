import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule {
  // Specifies the frequency for the operation, using the unix-cron format.
  schedule?: string;
}

export function compute_getResourcePolicyInstanceSchedulePolicyVmStopSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "schedule",
      "Specifies the frequency for the operation, using the unix-cron format.",
      [],
      true,
      false,
    ),
  ];
}
