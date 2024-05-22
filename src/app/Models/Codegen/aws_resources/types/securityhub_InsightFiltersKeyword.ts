import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securityhub_InsightFiltersKeyword {
  // A value for the keyword.
  value?: string;
}

export function securityhub_InsightFiltersKeyword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "A value for the keyword.",
      [],
      true,
      false,
    ),
  ];
}
