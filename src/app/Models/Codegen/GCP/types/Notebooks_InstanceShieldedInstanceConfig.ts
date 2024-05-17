import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_InstanceShieldedInstanceConfig {
  /*
Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.
*/
  EnableIntegrityMonitoring?: boolean;

  /*
Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.
*/
  EnableSecureBoot?: boolean;

  /*
Defines whether the instance has the vTPM enabled.
Enabled by default.
*/
  EnableVtpm?: boolean;
}

export function Notebooks_InstanceShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableIntegrityMonitoring",
      "Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the\nboot integrity of the instance. The attestation is performed against the integrity policy baseline.\nThis baseline is initially derived from the implicitly trusted boot image when the instance is created.\nEnabled by default.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableSecureBoot",
      "Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs\nauthentic software by verifying the digital signature of all boot components, and halting the boot process\nif signature verification fails.\nDisabled by default.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableVtpm",
      "Defines whether the instance has the vTPM enabled.\nEnabled by default.",
      [],
      false,
      true,
    ),
  ];
}
