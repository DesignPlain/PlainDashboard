import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AutoscalerAutoscalingPolicy } from "../types/AutoscalerAutoscalingPolicy";

export interface AutoscalerArgs {
  // URL of the managed instance group that this autoscaler will scale.
  Target?: string;

  // URL of the zone where the instance group resides.
  Zone?: string;

  /*
The configuration parameters for the autoscaling algorithm. You can
define one or more of the policies for an autoscaler: cpuUtilization,
customMetricUtilizations, and loadBalancingUtilization.
If none of these are specified, the default will be to autoscale based
on cpuUtilization to 0.6 or 60%!!(MISSING)
(MISSING)Structure is documented below.
*/
  AutoscalingPolicy?: AutoscalerAutoscalingPolicy;

  // An optional description of this resource.
  Description?: string;

  /*
Name of the resource. The name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Autoscaler extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  // URL of the managed instance group that this autoscaler will scale.
  public Target?: string;

  // URL of the zone where the instance group resides.
  public Zone?: string;

  /*
The configuration parameters for the autoscaling algorithm. You can
define one or more of the policies for an autoscaler: cpuUtilization,
customMetricUtilizations, and loadBalancingUtilization.
If none of these are specified, the default will be to autoscale based
on cpuUtilization to 0.6 or 60%!!(MISSING)
(MISSING)Structure is documented below.
*/
  public AutoscalingPolicy?: AutoscalerAutoscalingPolicy;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // An optional description of this resource.
  public Description?: string;

  /*
Name of the resource. The name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. The name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Target",
        "URL of the managed instance group that this autoscaler will scale.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "URL of the zone where the instance group resides.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AutoscalingPolicy",
        "The configuration parameters for the autoscaling algorithm. You can\ndefine one or more of the policies for an autoscaler: cpuUtilization,\ncustomMetricUtilizations, and loadBalancingUtilization.\nIf none of these are specified, the default will be to autoscale based\non cpuUtilization to 0.6 or 60%!\n(MISSING)Structure is documented below.",
      ),
    ];
  }
}
