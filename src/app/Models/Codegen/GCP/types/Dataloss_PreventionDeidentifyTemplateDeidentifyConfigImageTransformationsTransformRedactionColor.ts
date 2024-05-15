import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor {
  // The amount of blue in the color as a value in the interval [0, 1].
  Blue?: number;

  // The amount of green in the color as a value in the interval [0, 1].
  Green?: number;

  // The amount of red in the color as a value in the interval [0, 1].
  Red?: number;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformRedactionColor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Blue",
      "The amount of blue in the color as a value in the interval [0, 1].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Green",
      "The amount of green in the color as a value in the interval [0, 1].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Red",
      "The amount of red in the color as a value in the interval [0, 1].",
      [],
      false,
      false,
    ),
  ];
}
