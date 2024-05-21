import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FleetDefaultClusterConfigSecurityPostureConfig {
  /*
Sets which mode to use for Security Posture features.
Possible values are: `DISABLED`, `BASIC`.
*/
  mode?: string;

  /*
Sets which mode to use for vulnerability scanning.
Possible values are: `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC`, `VULNERABILITY_ENTERPRISE`.
*/
  vulnerabilityMode?: string;
}

export function gkehub_FleetDefaultClusterConfigSecurityPostureConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Sets which mode to use for Security Posture features.\nPossible values are: `DISABLED`, `BASIC`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vulnerabilityMode",
      "Sets which mode to use for vulnerability scanning.\nPossible values are: `VULNERABILITY_DISABLED`, `VULNERABILITY_BASIC`, `VULNERABILITY_ENTERPRISE`.",
      [],
      false,
      false,
    ),
  ];
}
