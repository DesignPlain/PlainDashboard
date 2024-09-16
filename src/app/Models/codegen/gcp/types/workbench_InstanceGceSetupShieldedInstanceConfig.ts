import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface workbench_InstanceGceSetupShieldedInstanceConfig {
  /*
Optional. Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.
*/
  enableIntegrityMonitoring?: boolean;

  /*
Optional. Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.
*/
  enableSecureBoot?: boolean;

  /*
Optional. Defines whether the VM instance has the vTPM enabled.
Enabled by default.
*/
  enableVtpm?: boolean;
}

export function workbench_InstanceGceSetupShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableIntegrityMonitoring',
      'Optional. Defines whether the VM instance has integrity monitoring\nenabled. Enables monitoring and attestation of the boot integrity of the VM\ninstance. The attestation is performed against the integrity policy baseline.\nThis baseline is initially derived from the implicitly trusted boot image\nwhen the VM instance is created. Enabled by default.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableSecureBoot',
      'Optional. Defines whether the VM instance has Secure Boot enabled.\nSecure Boot helps ensure that the system only runs authentic software by verifying\nthe digital signature of all boot components, and halting the boot process\nif signature verification fails. Disabled by default.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableVtpm',
      'Optional. Defines whether the VM instance has the vTPM enabled.\nEnabled by default.',
      () => [],
      false,
      false,
    ),
  ];
}
