import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig {
  // Whether the instance has integrity monitoring enabled.
  EnableIntegrityMonitoring?: boolean;

  // Whether the instance has Secure Boot enabled.
  EnableSecureBoot?: boolean;

  // Whether the instance has the vTPM enabled.
  EnableVtpm?: boolean;
}

export function Workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableIntegrityMonitoring",
      "Whether the instance has integrity monitoring enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableSecureBoot",
      "Whether the instance has Secure Boot enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableVtpm",
      "Whether the instance has the vTPM enabled.",
      [],
      false,
      false,
    ),
  ];
}
