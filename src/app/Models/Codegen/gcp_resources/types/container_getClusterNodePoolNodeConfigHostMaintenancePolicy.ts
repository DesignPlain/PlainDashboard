import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodePoolNodeConfigHostMaintenancePolicy {
  // .
  maintenanceInterval?: string;
}

export function container_getClusterNodePoolNodeConfigHostMaintenancePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maintenanceInterval",
      ".",
      [],
      true,
      false,
    ),
  ];
}
