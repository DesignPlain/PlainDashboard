import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ProjectExclusionArgs {
  /*
The project to create the exclusion in. If omitted, the project associated with the provider is
used.
*/
  Project?: string;

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
export class ProjectExclusion extends Resource {
  /*
The filter to apply when excluding logs. Only log entries that match the filter are excluded.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced-filters) for information on how to
write a filter.
*/
  public Filter?: string;

  // The name of the logging exclusion.
  public Name?: string;

  /*
The project to create the exclusion in. If omitted, the project associated with the provider is
used.
*/
  public Project?: string;

  // A human-readable description.
  public Description?: string;

  /*
Whether this exclusion rule should be disabled or not. This defaults to
false.
*/
  public Disabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the logging exclusion.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project to create the exclusion in. If omitted, the project associated with the provider is\nused.",
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
    ];
  }
}
