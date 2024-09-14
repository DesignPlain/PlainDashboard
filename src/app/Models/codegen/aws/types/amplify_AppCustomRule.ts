import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface amplify_AppCustomRule {
  // Condition for a URL rewrite or redirect rule, such as a country code.
  condition?: string;

  // Source pattern for a URL rewrite or redirect rule.
  source?: string;

  // Status code for a URL rewrite or redirect rule. Valid values: `200`, `301`, `302`, `404`, `404-200`.
  status?: string;

  // Target pattern for a URL rewrite or redirect rule.
  target?: string;
}

export function amplify_AppCustomRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status code for a URL rewrite or redirect rule. Valid values: `200`, `301`, `302`, `404`, `404-200`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "target",
      "Target pattern for a URL rewrite or redirect rule.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "condition",
      "Condition for a URL rewrite or redirect rule, such as a country code.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "Source pattern for a URL rewrite or redirect rule.",
      () => [],
      true,
      false,
    ),
  ];
}
