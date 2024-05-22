import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  evidently_FeatureVariationValue,
  evidently_FeatureVariationValue_GetTypes,
} from "./evidently_FeatureVariationValue";

export interface evidently_FeatureVariation {
  // A block that specifies the value assigned to this variation. Detailed below
  value?: evidently_FeatureVariationValue;

  // The name of the variation. Minimum length of `1`. Maximum length of `127`.
  name?: string;
}

export function evidently_FeatureVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "value",
      "A block that specifies the value assigned to this variation. Detailed below",
      evidently_FeatureVariationValue_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the variation. Minimum length of `1`. Maximum length of `127`.",
      [],
      true,
      false,
    ),
  ];
}
