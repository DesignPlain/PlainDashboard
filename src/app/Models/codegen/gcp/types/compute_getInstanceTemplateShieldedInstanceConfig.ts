import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getInstanceTemplateShieldedInstanceConfig {
  // - Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false.
  enableSecureBoot?: boolean;

  // - Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true.
  enableVtpm?: boolean;

  // - Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true.
  enableIntegrityMonitoring?: boolean;
}

export function compute_getInstanceTemplateShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableSecureBoot",
      "- Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableVtpm",
      "- Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableIntegrityMonitoring",
      "- Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true.",
      () => [],
      true,
      false,
    ),
  ];
}
