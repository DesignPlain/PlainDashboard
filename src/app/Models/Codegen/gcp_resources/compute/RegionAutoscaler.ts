import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RegionAutoscalerAutoscalingPolicy,
  compute_RegionAutoscalerAutoscalingPolicy_GetTypes,
} from "../types/compute_RegionAutoscalerAutoscalingPolicy";

export interface RegionAutoscalerArgs {
  /*
Name of the resource. The name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // URL of the region where the instance group resides.
  region?: string;

  // URL of the managed instance group that this autoscaler will scale.
  target?: string;

  /*
The configuration parameters for the autoscaling algorithm. You can
define one or more of the policies for an autoscaler: cpuUtilization,
customMetricUtilizations, and loadBalancingUtilization.
If none of these are specified, the default will be to autoscale based
on cpuUtilization to 0.6 or 60%!!(MISSING)
(MISSING)Structure is documented below.
*/
  autoscalingPolicy?: compute_RegionAutoscalerAutoscalingPolicy;

  // An optional description of this resource.
  description?: string;
}
export class RegionAutoscaler extends Resource {
  // URL of the managed instance group that this autoscaler will scale.
  public target?: string;

  /*
The configuration parameters for the autoscaling algorithm. You can
define one or more of the policies for an autoscaler: cpuUtilization,
customMetricUtilizations, and loadBalancingUtilization.
If none of these are specified, the default will be to autoscale based
on cpuUtilization to 0.6 or 60%!!(MISSING)
(MISSING)Structure is documented below.
*/
  public autoscalingPolicy?: compute_RegionAutoscalerAutoscalingPolicy;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  // An optional description of this resource.
  public description?: string;

  /*
Name of the resource. The name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // URL of the region where the instance group resides.
  public region?: string;

  // The URI of the created resource.
  public selfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. The name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "URL of the region where the instance group resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "target",
        "URL of the managed instance group that this autoscaler will scale.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoscalingPolicy",
        "The configuration parameters for the autoscaling algorithm. You can\ndefine one or more of the policies for an autoscaler: cpuUtilization,\ncustomMetricUtilizations, and loadBalancingUtilization.\nIf none of these are specified, the default will be to autoscale based\non cpuUtilization to 0.6 or 60%!\n(MISSING)Structure is documented below.",
        compute_RegionAutoscalerAutoscalingPolicy_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
