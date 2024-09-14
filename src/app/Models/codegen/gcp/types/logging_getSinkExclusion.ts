import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface logging_getSinkExclusion {
  // A description of this exclusion.
  description?: string;

  // Whether this exclusion is disabled and it does not exclude any log entries.
  disabled?: boolean;

  // An advanced logs filter that matches the log entries to be excluded.
  filter?: string;

  // A client-assigned identifier, such as `load-balancer-exclusion`.
  name?: string;
}

export function logging_getSinkExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "A description of this exclusion.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      "Whether this exclusion is disabled and it does not exclude any log entries.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filter",
      "An advanced logs filter that matches the log entries to be excluded.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A client-assigned identifier, such as `load-balancer-exclusion`.",
      () => [],
      true,
      false,
    ),
  ];
}
