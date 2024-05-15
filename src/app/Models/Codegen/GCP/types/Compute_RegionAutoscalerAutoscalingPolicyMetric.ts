import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionAutoscalerAutoscalingPolicyMetric {
  /*
The target value of the metric that autoscaler should
maintain. This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.
For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.
*/
  Target?: number;

  /*
Defines how target utilization value is expressed for a
Stackdriver Monitoring metric.
Possible values are: `GAUGE`, `DELTA_PER_SECOND`, `DELTA_PER_MINUTE`.
*/
  Type?: string;

  /*
A filter string to be used as the filter string for
a Stackdriver Monitoring TimeSeries.list API call.
This filter is used to select a specific TimeSeries for
the purpose of autoscaling and to determine whether the metric
is exporting per-instance or per-group data.
You can only use the AND operator for joining selectors.
You can only use direct equality comparison operator (=) without
any functions for each selector.
You can specify the metric in both the filter string and in the
metric field. However, if specified in both places, the metric must
be identical.
The monitored resource type determines what kind of values are
expected for the metric. If it is a gce_instance, the autoscaler
expects the metric to include a separate TimeSeries for each
instance in a group. In such a case, you cannot filter on resource
labels.
If the resource type is any other value, the autoscaler expects
this metric to contain values that apply to the entire autoscaled
instance group and resource label filtering can be performed to
point autoscaler at the correct TimeSeries to scale upon.
This is called a per-group metric for the purpose of autoscaling.
If not specified, the type defaults to gce_instance.
You should provide a filter that is selective enough to pick just
one TimeSeries for the autoscaled group or for each of the instances
(if you are using gce_instance resource type). If multiple
TimeSeries are returned upon the query execution, the autoscaler
will sum their respective values to obtain its scaling value.
*/
  Filter?: string;

  /*
The identifier (type) of the Stackdriver Monitoring metric.
The metric cannot have negative values.
The metric must have a value type of INT64 or DOUBLE.
*/
  Name?: string;

  /*
If scaling is based on a per-group metric value that represents the
total amount of work to be done or resource usage, set this value to
an amount assigned for a single instance of the scaled group.
The autoscaler will keep the number of instances proportional to the
value of this metric, the metric itself should not change value due
to group resizing.
For example, a good metric to use with the target is
`pubsub.googleapis.com/subscription/num_undelivered_messages`
or a custom metric exporting the total number of requests coming to
your instances.
A bad example would be a metric exporting an average or median
latency, since this value can't include a chunk assignable to a
single instance, it could be better used with utilization_target
instead.
*/
  SingleInstanceAssignment?: number;
}

export function Compute_RegionAutoscalerAutoscalingPolicyMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The identifier (type) of the Stackdriver Monitoring metric.\nThe metric cannot have negative values.\nThe metric must have a value type of INT64 or DOUBLE.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SingleInstanceAssignment",
      "If scaling is based on a per-group metric value that represents the\ntotal amount of work to be done or resource usage, set this value to\nan amount assigned for a single instance of the scaled group.\nThe autoscaler will keep the number of instances proportional to the\nvalue of this metric, the metric itself should not change value due\nto group resizing.\nFor example, a good metric to use with the target is\n`pubsub.googleapis.com/subscription/num_undelivered_messages`\nor a custom metric exporting the total number of requests coming to\nyour instances.\nA bad example would be a metric exporting an average or median\nlatency, since this value can't include a chunk assignable to a\nsingle instance, it could be better used with utilization_target\ninstead.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Target",
      "The target value of the metric that autoscaler should\nmaintain. This must be a positive value. A utilization\nmetric scales number of virtual machines handling requests\nto increase or decrease proportionally to the metric.\nFor example, a good metric to use as a utilizationTarget is\nwww.googleapis.com/compute/instance/network/received_bytes_count.\nThe autoscaler will work to keep this value constant for each\nof the instances.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Defines how target utilization value is expressed for a\nStackdriver Monitoring metric.\nPossible values are: `GAUGE`, `DELTA_PER_SECOND`, `DELTA_PER_MINUTE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Filter",
      "A filter string to be used as the filter string for\na Stackdriver Monitoring TimeSeries.list API call.\nThis filter is used to select a specific TimeSeries for\nthe purpose of autoscaling and to determine whether the metric\nis exporting per-instance or per-group data.\nYou can only use the AND operator for joining selectors.\nYou can only use direct equality comparison operator (=) without\nany functions for each selector.\nYou can specify the metric in both the filter string and in the\nmetric field. However, if specified in both places, the metric must\nbe identical.\nThe monitored resource type determines what kind of values are\nexpected for the metric. If it is a gce_instance, the autoscaler\nexpects the metric to include a separate TimeSeries for each\ninstance in a group. In such a case, you cannot filter on resource\nlabels.\nIf the resource type is any other value, the autoscaler expects\nthis metric to contain values that apply to the entire autoscaled\ninstance group and resource label filtering can be performed to\npoint autoscaler at the correct TimeSeries to scale upon.\nThis is called a per-group metric for the purpose of autoscaling.\nIf not specified, the type defaults to gce_instance.\nYou should provide a filter that is selective enough to pick just\none TimeSeries for the autoscaled group or for each of the instances\n(if you are using gce_instance resource type). If multiple\nTimeSeries are returned upon the query execution, the autoscaler\nwill sum their respective values to obtain its scaling value.",
      [],
      false,
      false,
    ),
  ];
}
