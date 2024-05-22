import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_BareMetalAdminClusterClusterOperations {
  // Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).
  enableApplicationLogs?: boolean;
}

export function gkeonprem_BareMetalAdminClusterClusterOperations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableApplicationLogs",
      "Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).",
      [],
      false,
      false,
    ),
  ];
}
