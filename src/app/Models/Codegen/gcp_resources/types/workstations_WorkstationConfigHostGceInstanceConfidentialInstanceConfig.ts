import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig {
  // Whether the instance has confidential compute enabled.
  enableConfidentialCompute?: boolean;
}

export function workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableConfidentialCompute",
      "Whether the instance has confidential compute enabled.",
      [],
      false,
      false,
    ),
  ];
}
