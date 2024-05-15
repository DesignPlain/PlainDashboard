import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterSecurityPostureConfig {
  // Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include `DISABLED` and `BASIC`.
  Mode?: string;

  // Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC` and `VULNERABILITY_ENTERPRISE`.
  VulnerabilityMode?: string;
}

export function Container_ClusterSecurityPostureConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include `DISABLED` and `BASIC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VulnerabilityMode",
      "Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC` and `VULNERABILITY_ENTERPRISE`.",
      [],
      false,
      false,
    ),
  ];
}
