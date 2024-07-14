import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface evidently_FeatureVariationValue {
  // If this feature uses the Boolean variation type, this field contains the Boolean value of this variation.
  boolValue?: string;

  // If this feature uses the double integer variation type, this field contains the double integer value of this variation.
  doubleValue?: string;

  // If this feature uses the long variation type, this field contains the long value of this variation. Minimum value of `-9007199254740991`. Maximum value of `9007199254740991`.
  longValue?: string;

  // If this feature uses the string variation type, this field contains the string value of this variation. Minimum length of `0`. Maximum length of `512`.
  stringValue?: string;
}

export function evidently_FeatureVariationValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "boolValue",
      "If this feature uses the Boolean variation type, this field contains the Boolean value of this variation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "doubleValue",
      "If this feature uses the double integer variation type, this field contains the double integer value of this variation.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "longValue",
      "If this feature uses the long variation type, this field contains the long value of this variation. Minimum value of `-9007199254740991`. Maximum value of `9007199254740991`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "If this feature uses the string variation type, this field contains the string value of this variation. Minimum length of `0`. Maximum length of `512`.",
      [],
      false,
      false,
    ),
  ];
}
