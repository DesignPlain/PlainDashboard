import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface securityhub_InsightFiltersUserDefinedValue {
  //
  value?: string;

  //
  comparison?: string;

  // The key of the map filter. For example, for `ResourceTags`, `Key` identifies the name of the tag. For `UserDefinedFields`, `Key` is the name of the field.
  key?: string;
}

export function securityhub_InsightFiltersUserDefinedValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "value", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "comparison",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key of the map filter. For example, for `ResourceTags`, `Key` identifies the name of the tag. For `UserDefinedFields`, `Key` is the name of the field.",
      () => [],
      true,
      false,
    ),
  ];
}
