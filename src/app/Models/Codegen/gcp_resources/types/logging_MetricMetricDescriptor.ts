import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  logging_MetricMetricDescriptorLabel,
  logging_MetricMetricDescriptorLabel_GetTypes,
} from "./logging_MetricMetricDescriptorLabel";

export interface logging_MetricMetricDescriptor {
  /*
The unit in which the metric value is reported. It is only applicable if the valueType is
`INT64`, `DOUBLE`, or `DISTRIBUTION`. The supported units are a subset of
[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard
*/
  unit?: string;

  /*
Whether the measurement is an integer, a floating-point number, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to INT64.
Possible values are: `BOOL`, `INT64`, `DOUBLE`, `STRING`, `DISTRIBUTION`, `MONEY`.
*/
  valueType?: string;

  /*
A concise name for the metric, which can be displayed in user interfaces. Use sentence case
without an ending period, for example "Request count". This field is optional but it is
recommended to be set for any metrics associated with user-visible concepts, such as Quota.
*/
  displayName?: string;

  /*
The set of labels that can be used to describe a specific instance of this metric type. For
example, the appengine.googleapis.com/http/server/response_latencies metric type has a label
for the HTTP response code, response_code, so you can look at latencies for successful responses
or just for responses that failed.
Structure is documented below.
*/
  labels?: Array<logging_MetricMetricDescriptorLabel>;

  /*
Whether the metric records instantaneous values, changes to a value, etc.
Some combinations of metricKind and valueType might not be supported.
For counter metrics, set this to DELTA.
Possible values are: `DELTA`, `GAUGE`, `CUMULATIVE`.
*/
  metricKind?: string;
}

export function logging_MetricMetricDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unit",
      "The unit in which the metric value is reported. It is only applicable if the valueType is\n`INT64`, `DOUBLE`, or `DISTRIBUTION`. The supported units are a subset of\n[The Unified Code for Units of Measure](http://unitsofmeasure.org/ucum.html) standard",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "valueType",
      "Whether the measurement is an integer, a floating-point number, etc.\nSome combinations of metricKind and valueType might not be supported.\nFor counter metrics, set this to INT64.\nPossible values are: `BOOL`, `INT64`, `DOUBLE`, `STRING`, `DISTRIBUTION`, `MONEY`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      'A concise name for the metric, which can be displayed in user interfaces. Use sentence case\nwithout an ending period, for example "Request count". This field is optional but it is\nrecommended to be set for any metrics associated with user-visible concepts, such as Quota.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "labels",
      "The set of labels that can be used to describe a specific instance of this metric type. For\nexample, the appengine.googleapis.com/http/server/response_latencies metric type has a label\nfor the HTTP response code, response_code, so you can look at latencies for successful responses\nor just for responses that failed.\nStructure is documented below.",
      logging_MetricMetricDescriptorLabel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "metricKind",
      "Whether the metric records instantaneous values, changes to a value, etc.\nSome combinations of metricKind and valueType might not be supported.\nFor counter metrics, set this to DELTA.\nPossible values are: `DELTA`, `GAUGE`, `CUMULATIVE`.",
      [],
      true,
      false,
    ),
  ];
}
