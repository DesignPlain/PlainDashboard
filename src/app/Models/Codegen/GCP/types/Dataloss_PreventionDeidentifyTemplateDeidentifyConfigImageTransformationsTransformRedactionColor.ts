import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor {
  // The amount of blue in the color as a value in the interval [0, 1].
  blue?: number;

  // The amount of green in the color as a value in the interval [0, 1].
  green?: number;

  // The amount of red in the color as a value in the interval [0, 1].
  red?: number;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "blue",
      "The amount of blue in the color as a value in the interval [0, 1].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "green",
      "The amount of green in the color as a value in the interval [0, 1].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "red",
      "The amount of red in the color as a value in the interval [0, 1].",
      [],
      false,
      false,
    ),
  ];
}
