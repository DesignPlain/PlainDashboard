import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Logging_getSinkExclusion {
  // A client-assigned identifier, such as `load-balancer-exclusion`.
  Name?: string;

  // A description of this exclusion.
  Description?: string;

  // Whether this exclusion is disabled and it does not exclude any log entries.
  Disabled?: boolean;

  // An advanced logs filter that matches the log entries to be excluded.
  Filter?: string;
}

export function Logging_getSinkExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "A client-assigned identifier, such as `load-balancer-exclusion`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A description of this exclusion.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "Whether this exclusion is disabled and it does not exclude any log entries.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Filter",
      "An advanced logs filter that matches the log entries to be excluded.",
      [],
      true,
      false,
    ),
  ];
}
