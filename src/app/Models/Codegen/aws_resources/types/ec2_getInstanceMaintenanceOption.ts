import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getInstanceMaintenanceOption {
  // Automatic recovery behavior of the instance.
  autoRecovery?: string;
}

export function ec2_getInstanceMaintenanceOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "autoRecovery",
      "Automatic recovery behavior of the instance.",
      [],
      true,
      false,
    ),
  ];
}
