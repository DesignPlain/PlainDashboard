import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig {
  // Whether the instance has confidential compute enabled.
  EnableConfidentialCompute?: boolean;
}

export function Workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableConfidentialCompute",
      "Whether the instance has confidential compute enabled.",
      [],
      false,
      false,
    ),
  ];
}
