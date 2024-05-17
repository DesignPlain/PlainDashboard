import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig {
  /*
Defines whether instances have integrity monitoring enabled.

- - -
*/
  EnableIntegrityMonitoring?: boolean;

  // Defines whether instances have Secure Boot enabled.
  EnableSecureBoot?: boolean;

  // Defines whether instances have the [vTPM](https://cloud.google.com/security/shielded-cloud/shielded-vm#vtpm) enabled.
  EnableVtpm?: boolean;
}

export function Dataproc_ClusterClusterConfigGceClusterConfigShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableIntegrityMonitoring",
      "Defines whether instances have integrity monitoring enabled.\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableSecureBoot",
      "Defines whether instances have Secure Boot enabled.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableVtpm",
      "Defines whether instances have the [vTPM](https://cloud.google.com/security/shielded-cloud/shielded-vm#vtpm) enabled.",
      [],
      false,
      true,
    ),
  ];
}
