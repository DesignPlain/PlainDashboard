import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkehub_FleetDefaultClusterConfigSecurityPostureConfig {
  /*
Sets which mode to use for Security Posture features.
Possible values are: `DISABLED`, `BASIC`.
*/
  Mode?: string;

  /*
Sets which mode to use for vulnerability scanning.
Possible values are: `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC`, `VULNERABILITY_ENTERPRISE`.
*/
  VulnerabilityMode?: string;
}

export function Gkehub_FleetDefaultClusterConfigSecurityPostureConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Mode",
      "Sets which mode to use for Security Posture features.\nPossible values are: `DISABLED`, `BASIC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VulnerabilityMode",
      "Sets which mode to use for vulnerability scanning.\nPossible values are: `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC`, `VULNERABILITY_ENTERPRISE`.",
      [],
      false,
      false,
    ),
  ];
}
