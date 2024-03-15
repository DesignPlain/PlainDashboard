import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ConsumerQuotaOverrideArgs {
  // The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
  OverrideValue?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The service that the metrics belong to, e.g. `compute.googleapis.com`.
  Service?: string;

  // If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.
  Dimensions?: Map<string, string>;

  /*
If the new quota would decrease the existing quota by more than 10%!!(MISSING),(MISSING) the request is rejected.
If `force` is `true`, that safety check is ignored.
*/
  Force?: boolean;

  /*
The limit on the metric, e.g. `/project/region`.
> Make sure that `limit` is in a format that doesn't start with `1/` or contain curly braces.
E.g. use `/project/user` instead of `1/{project}/{user}`.


- - -
*/
  Limit?: string;

  // The metric that should be limited, e.g. `compute.googleapis.com/cpus`.
  Metric?: string;
}
export class ConsumerQuotaOverride extends Resource {
  // If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.
  public Dimensions?: Map<string, string>;

  /*
If the new quota would decrease the existing quota by more than 10%!!(MISSING),(MISSING) the request is rejected.
If `force` is `true`, that safety check is ignored.
*/
  public Force?: boolean;

  /*
The limit on the metric, e.g. `/project/region`.
> Make sure that `limit` is in a format that doesn't start with `1/` or contain curly braces.
E.g. use `/project/user` instead of `1/{project}/{user}`.


- - -
*/
  public Limit?: string;

  // The metric that should be limited, e.g. `compute.googleapis.com/cpus`.
  public Metric?: string;

  // The server-generated name of the quota override.
  public Name?: string;

  // The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
  public OverrideValue?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The service that the metrics belong to, e.g. `compute.googleapis.com`.
  public Service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "The service that the metrics belong to, e.g. `compute.googleapis.com`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Dimensions",
        "If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Force",
        "If the new quota would decrease the existing quota by more than 10%!,(MISSING) the request is rejected.\nIf `force` is `true`, that safety check is ignored.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Limit",
        "The limit on the metric, e.g. `/project/region`.\n> Make sure that `limit` is in a format that doesn't start with `1/` or contain curly braces.\nE.g. use `/project/user` instead of `1/{project}/{user}`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metric",
        "The metric that should be limited, e.g. `compute.googleapis.com/cpus`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OverrideValue",
        "The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).",
      ),
    ];
  }
}
