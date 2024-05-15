import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule {
  // Specifies the frequency for the operation, using the unix-cron format.
  Schedule?: string;
}

export function Compute_getResourcePolicyInstanceSchedulePolicyVmStartSchedule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Schedule",
      "Specifies the frequency for the operation, using the unix-cron format.",
      [],
      true,
      false,
    ),
  ];
}
