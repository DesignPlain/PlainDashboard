import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterClusterTelemetry {
  /*
Telemetry integration for the cluster. Supported values (`ENABLED, DISABLED, SYSTEM_ONLY`);
`SYSTEM_ONLY` (Only system components are monitored and logged) is only available in GKE versions 1.15 and later.
*/
  type?: string;
}

export function container_ClusterClusterTelemetry_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Telemetry integration for the cluster. Supported values (`ENABLED, DISABLED, SYSTEM_ONLY`);\n`SYSTEM_ONLY` (Only system components are monitored and logged) is only available in GKE versions 1.15 and later.",
      [],
      true,
      false,
    ),
  ];
}
