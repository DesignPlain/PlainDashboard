import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionInstanceTemplateShieldedInstanceConfig {
  // - Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true.
  EnableIntegrityMonitoring?: boolean;

  // - Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false.
  EnableSecureBoot?: boolean;

  // - Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true.
  EnableVtpm?: boolean;
}

export function Compute_RegionInstanceTemplateShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableVtpm",
      "- Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableIntegrityMonitoring",
      "- Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableSecureBoot",
      "- Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false.",
      [],
      false,
      true,
    ),
  ];
}
