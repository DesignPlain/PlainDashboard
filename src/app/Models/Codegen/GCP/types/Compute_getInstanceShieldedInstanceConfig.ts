import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceShieldedInstanceConfig {
  // - Whether secure boot is enabled for the instance.
  EnableSecureBoot?: boolean;

  // - Whether the instance uses vTPM.
  EnableVtpm?: boolean;

  // - Whether integrity monitoring is enabled for the instance.
  EnableIntegrityMonitoring?: boolean;
}

export function Compute_getInstanceShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableSecureBoot",
      "- Whether secure boot is enabled for the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableVtpm",
      "- Whether the instance uses vTPM.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableIntegrityMonitoring",
      "- Whether integrity monitoring is enabled for the instance.",
      [],
      true,
      false,
    ),
  ];
}
