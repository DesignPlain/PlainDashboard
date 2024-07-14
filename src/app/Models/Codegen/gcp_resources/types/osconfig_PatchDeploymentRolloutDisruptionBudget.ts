import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface osconfig_PatchDeploymentRolloutDisruptionBudget {
  // Specifies a fixed value.
  fixed?: number;

  // Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
  percentage?: number;
}

export function osconfig_PatchDeploymentRolloutDisruptionBudget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "fixed",
      "Specifies a fixed value.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "percentage",
      "Specifies the relative value defined as a percentage, which will be multiplied by a reference value.",
      [],
      false,
      true,
    ),
  ];
}
