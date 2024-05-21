import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface osconfig_OsPolicyAssignmentRolloutDisruptionBudget {
  // Specifies a fixed value.
  fixed?: number;

  /*
Specifies the relative value defined as a percentage,
which will be multiplied by a reference value.

--------------------------------------------------------------------------------
*/
  percent?: number;
}

export function osconfig_OsPolicyAssignmentRolloutDisruptionBudget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "fixed",
      "Specifies a fixed value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percent",
      "Specifies the relative value defined as a percentage,\nwhich will be multiplied by a reference value.\n\n--------------------------------------------------------------------------------",
      [],
      false,
      false,
    ),
  ];
}
