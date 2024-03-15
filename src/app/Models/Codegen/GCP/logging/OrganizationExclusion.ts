import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OrganizationExclusionArgs {
  // The organization to create the exclusion in.
  OrgId?: string;

  // A human-readable description.
  Description?: string;

  /*
Whether this exclusion rule should be disabled or not. This defaults to
false.
*/
  Disabled?: boolean;

  /*
The filter to apply when excluding logs. Only log entries that match the filter are excluded.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to
write a filter.
*/
  Filter?: string;

  // The name of the logging exclusion.
  Name?: string;
}
export class OrganizationExclusion extends Resource {
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

  // The organization to create the exclusion in.
  public OrgId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The organization to create the exclusion in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "Whether this exclusion rule should be disabled or not. This defaults to\nfalse.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "The filter to apply when excluding logs. Only log entries that match the filter are excluded.\nSee [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to\nwrite a filter.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the logging exclusion.",
      ),
    ];
  }
}
