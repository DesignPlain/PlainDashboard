import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule {
  // Specifies the frequency for the operation, using the unix-cron format.
  schedule?: string;
}

export function compute_ResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "schedule",
      "Specifies the frequency for the operation, using the unix-cron format.",
      [],
      true,
      true,
    ),
  ];
}
