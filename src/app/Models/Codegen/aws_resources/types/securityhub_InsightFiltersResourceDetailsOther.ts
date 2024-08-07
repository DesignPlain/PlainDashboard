import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface securityhub_InsightFiltersResourceDetailsOther {
  // The condition to apply to a string value when querying for findings. Valid values include: `EQUALS` and `NOT_EQUALS`.
  comparison?: string;

  // The key of the map filter. For example, for `ResourceTags`, `Key` identifies the name of the tag. For `UserDefinedFields`, `Key` is the name of the field.
  key?: string;

  // A date range value for the date filter, provided as an Integer.
  value?: string;
}

export function securityhub_InsightFiltersResourceDetailsOther_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "comparison",
      "The condition to apply to a string value when querying for findings. Valid values include: `EQUALS` and `NOT_EQUALS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key of the map filter. For example, for `ResourceTags`, `Key` identifies the name of the tag. For `UserDefinedFields`, `Key` is the name of the field.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "A date range value for the date filter, provided as an Integer.",
      [],
      true,
      false,
    ),
  ];
}
