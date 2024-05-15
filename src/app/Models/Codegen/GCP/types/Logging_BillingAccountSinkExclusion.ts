import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Logging_BillingAccountSinkExclusion {
  // A description of this exclusion.
  Description?: string;

  // If set to True, then this exclusion is disabled and it does not exclude any log entries.
  Disabled?: boolean;

  /*
An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100%!!(MISSING)o(MISSING)f the matching log entries. See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  Filter?: string;

  // A client-assigned identifier, such as `load-balancer-exclusion`. Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.
  Name?: string;
}

export function Logging_BillingAccountSinkExclusion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A description of this exclusion.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "If set to True, then this exclusion is disabled and it does not exclude any log entries.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Filter",
      "An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100%!o(MISSING)f the matching log entries. See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to\nwrite a filter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "A client-assigned identifier, such as `load-balancer-exclusion`. Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.",
      [],
      true,
      false,
    ),
  ];
}
