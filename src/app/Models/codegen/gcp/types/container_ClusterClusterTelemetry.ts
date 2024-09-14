import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      true,
      false,
    ),
  ];
}
