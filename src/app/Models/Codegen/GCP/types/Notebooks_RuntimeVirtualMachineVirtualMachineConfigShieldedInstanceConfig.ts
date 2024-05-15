import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig {
  /*
Defines whether the instance has integrity monitoring enabled.
Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.
*/
  EnableIntegrityMonitoring?: boolean;

  /*
Defines whether the instance has Secure Boot enabled.Secure
Boot helps ensure that the system only runs authentic software
by verifying the digital signature of all boot components, and
halting the boot process if signature verification fails.
Disabled by default.
*/
  EnableSecureBoot?: boolean;

  /*
Defines whether the instance has the vTPM enabled. Enabled by
default.
*/
  EnableVtpm?: boolean;
}

export function Notebooks_RuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableIntegrityMonitoring",
      "Defines whether the instance has integrity monitoring enabled.\nEnables monitoring and attestation of the boot integrity of\nthe instance. The attestation is performed against the\nintegrity policy baseline. This baseline is initially derived\nfrom the implicitly trusted boot image when the instance is\ncreated. Enabled by default.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableSecureBoot",
      "Defines whether the instance has Secure Boot enabled.Secure\nBoot helps ensure that the system only runs authentic software\nby verifying the digital signature of all boot components, and\nhalting the boot process if signature verification fails.\nDisabled by default.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableVtpm",
      "Defines whether the instance has the vTPM enabled. Enabled by\ndefault.",
      [],
      false,
      false,
    ),
  ];
}
