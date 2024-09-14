import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterSecurityPostureConfig {
  // Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include `DISABLED` and `BASIC`.
  mode?: string;

  // Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC` and `VULNERABILITY_ENTERPRISE`.
  vulnerabilityMode?: string;
}

export function container_ClusterSecurityPostureConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include `DISABLED` and `BASIC`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vulnerabilityMode",
      "Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC` and `VULNERABILITY_ENTERPRISE`.",
      () => [],
      false,
      false,
    ),
  ];
}
