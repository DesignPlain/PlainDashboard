import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getInstanceShieldedInstanceConfig {
  // - Whether the instance uses vTPM.
  enableVtpm?: boolean;

  // - Whether integrity monitoring is enabled for the instance.
  enableIntegrityMonitoring?: boolean;

  // - Whether secure boot is enabled for the instance.
  enableSecureBoot?: boolean;
}

export function compute_getInstanceShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableVtpm",
      "- Whether the instance uses vTPM.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableIntegrityMonitoring",
      "- Whether integrity monitoring is enabled for the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableSecureBoot",
      "- Whether secure boot is enabled for the instance.",
      [],
      true,
      false,
    ),
  ];
}
