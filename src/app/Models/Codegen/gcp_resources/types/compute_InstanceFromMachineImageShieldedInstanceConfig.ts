import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_InstanceFromMachineImageShieldedInstanceConfig {
  // Whether integrity monitoring is enabled for the instance.
  enableIntegrityMonitoring?: boolean;

  // Whether secure boot is enabled for the instance.
  enableSecureBoot?: boolean;

  // Whether the instance uses vTPM.
  enableVtpm?: boolean;
}

export function compute_InstanceFromMachineImageShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableIntegrityMonitoring",
      "Whether integrity monitoring is enabled for the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableSecureBoot",
      "Whether secure boot is enabled for the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableVtpm",
      "Whether the instance uses vTPM.",
      [],
      false,
      false,
    ),
  ];
}
