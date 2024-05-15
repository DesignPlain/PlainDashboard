import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BillingAccountExclusionArgs {
  /*
The filter to apply when excluding logs. Only log entries that match the filter are excluded.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to
write a filter.
*/
  Filter?: string;

  // The name of the logging exclusion.
  Name?: string;

  // The billing account to create the exclusion for.
  BillingAccount?: string;

  // A human-readable description.
  Description?: string;

  /*
Whether this exclusion rule should be disabled or not. This defaults to
false.
*/
  Disabled?: boolean;
}
export class BillingAccountExclusion extends Resource {
  // The billing account to create the exclusion for.
  public BillingAccount?: string;

  // A human-readable description.
  public Description?: string;

  /*
Whether this exclusion rule should be disabled or not. This defaults to
false.
*/
  public Disabled?: boolean;

  /*
The filter to apply when excluding logs. Only log entries that match the filter are excluded.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to
write a filter.
*/
  public Filter?: string;

  // The name of the logging exclusion.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "Disabled",
        "Whether this exclusion rule should be disabled or not. This defaults to\nfalse.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "The filter to apply when excluding logs. Only log entries that match the filter are excluded.\nSee [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to\nwrite a filter.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the logging exclusion.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "BillingAccount",
        "The billing account to create the exclusion for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description.",
        [],
        false,
        false,
      ),
    ];
  }
}
