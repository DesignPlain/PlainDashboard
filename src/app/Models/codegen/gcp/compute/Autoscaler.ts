import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_AutoscalerAutoscalingPolicy,
  compute_AutoscalerAutoscalingPolicy_GetTypes,
} from '../types/compute_AutoscalerAutoscalingPolicy';

export interface AutoscalerArgs {
  // An optional description of this resource.
  description?: string;

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

  // URL of the managed instance group that this autoscaler will scale.
  target?: string;

  // URL of the zone where the instance group resides.
  zone?: string;

  /*
The configuration parameters for the autoscaling algorithm. You can
define one or more of the policies for an autoscaler: cpuUtilization,
customMetricUtilizations, and loadBalancingUtilization.
If none of these are specified, the default will be to autoscale based
on cpuUtilization to 0.6 or 60%!!(MISSING)
(MISSING)Structure is documented below.
*/
  autoscalingPolicy?: compute_AutoscalerAutoscalingPolicy;
}
export class Autoscaler extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // URL of the managed instance group that this autoscaler will scale.
  public target?: string;

  // URL of the zone where the instance group resides.
  public zone?: string;

  /*
The configuration parameters for the autoscaling algorithm. You can
define one or more of the policies for an autoscaler: cpuUtilization,
customMetricUtilizations, and loadBalancingUtilization.
If none of these are specified, the default will be to autoscale based
on cpuUtilization to 0.6 or 60%!!(MISSING)
(MISSING)Structure is documented below.
*/
  public autoscalingPolicy?: compute_AutoscalerAutoscalingPolicy;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. The name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'target',
        'URL of the managed instance group that this autoscaler will scale.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'zone',
        'URL of the zone where the instance group resides.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoscalingPolicy',
        'The configuration parameters for the autoscaling algorithm. You can\ndefine one or more of the policies for an autoscaler: cpuUtilization,\ncustomMetricUtilizations, and loadBalancingUtilization.\nIf none of these are specified, the default will be to autoscale based\non cpuUtilization to 0.6 or 60%!\n(MISSING)Structure is documented below.',
        () => compute_AutoscalerAutoscalingPolicy_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
