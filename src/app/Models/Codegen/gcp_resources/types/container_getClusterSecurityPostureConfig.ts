import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterSecurityPostureConfig {
  // Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include DISABLED and BASIC.
  mode?: string;

  // Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include VULNERABILITY_DISABLED, VULNERABILITY_BASIC and VULNERABILITY_ENTERPRISE.
  vulnerabilityMode?: string;
}

export function container_getClusterSecurityPostureConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include DISABLED and BASIC.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vulnerabilityMode",
      "Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include VULNERABILITY_DISABLED, VULNERABILITY_BASIC and VULNERABILITY_ENTERPRISE.",
      [],
      true,
      false,
    ),
  ];
}
