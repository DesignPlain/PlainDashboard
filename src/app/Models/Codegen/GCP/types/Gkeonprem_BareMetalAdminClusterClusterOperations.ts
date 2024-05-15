import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalAdminClusterClusterOperations {
  // Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).
  EnableApplicationLogs?: boolean;
}

export function Gkeonprem_BareMetalAdminClusterClusterOperations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableApplicationLogs",
      "Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).",
      [],
      false,
      false,
    ),
  ];
}
