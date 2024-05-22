import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig {
  /*
Defines whether instances have integrity monitoring enabled.

- - -
*/
  enableIntegrityMonitoring?: boolean;

  // Defines whether instances have Secure Boot enabled.
  enableSecureBoot?: boolean;

  // Defines whether instances have the [vTPM](https://cloud.google.com/security/shielded-cloud/shielded-vm#vtpm) enabled.
  enableVtpm?: boolean;
}

export function dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableIntegrityMonitoring",
      "Defines whether instances have integrity monitoring enabled.\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableSecureBoot",
      "Defines whether instances have Secure Boot enabled.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableVtpm",
      "Defines whether instances have the [vTPM](https://cloud.google.com/security/shielded-cloud/shielded-vm#vtpm) enabled.",
      [],
      false,
      true,
    ),
  ];
}
