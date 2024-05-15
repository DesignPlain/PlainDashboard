import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodeConfigHostMaintenancePolicy {
  // .
  MaintenanceInterval?: string;
}

export function Container_getClusterNodeConfigHostMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MaintenanceInterval",
      ".",
      [],
      true,
      false,
    ),
  ];
}
