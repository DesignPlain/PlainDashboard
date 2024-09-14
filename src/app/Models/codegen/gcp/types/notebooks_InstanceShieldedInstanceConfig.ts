import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface notebooks_InstanceShieldedInstanceConfig {
  /*
Defines whether the instance has the vTPM enabled.
Enabled by default.
*/
  enableVtpm?: boolean;

  /*
Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.
*/
  enableIntegrityMonitoring?: boolean;

  /*
Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.
*/
  enableSecureBoot?: boolean;
}

export function notebooks_InstanceShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableVtpm",
      "Defines whether the instance has the vTPM enabled.\nEnabled by default.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableIntegrityMonitoring",
      "Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the\nboot integrity of the instance. The attestation is performed against the integrity policy baseline.\nThis baseline is initially derived from the implicitly trusted boot image when the instance is created.\nEnabled by default.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableSecureBoot",
      "Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs\nauthentic software by verifying the digital signature of all boot components, and halting the boot process\nif signature verification fails.\nDisabled by default.",
      () => [],
      false,
      true,
    ),
  ];
}
