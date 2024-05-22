import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface accessanalyzer_ArchiveRuleFilter {
  // Boolean comparator.
  exists?: string;

  // Not Equals comparator.
  neqs?: Array<string>;

  // Contains comparator.
  contains?: Array<string>;

  // Filter criteria.
  criteria?: string;

  // Equals comparator.
  eqs?: Array<string>;
}

export function accessanalyzer_ArchiveRuleFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "eqs",
      "Equals comparator.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "exists",
      "Boolean comparator.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "neqs",
      "Not Equals comparator.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "contains",
      "Contains comparator.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "criteria",
      "Filter criteria.",
      [],
      true,
      false,
    ),
  ];
}
