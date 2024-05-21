import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  monitoring_MetricDescriptorMetadata,
  monitoring_MetricDescriptorMetadata_GetTypes,
} from "../types/monitoring_MetricDescriptorMetadata";
import {
  monitoring_MetricDescriptorLabel,
  monitoring_MetricDescriptorLabel_GetTypes,
} from "../types/monitoring_MetricDescriptorLabel";

export interface MetricDescriptorArgs {
  /*
Metadata which can be used to guide usage of the metric.
Structure is documented below.
*/
  metadata?: monitoring_MetricDescriptorMetadata;

  /*
Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metricKind and valueType might not be supported.
Possible values are: `METRIC_KIND_UNSPECIFIED`, `GAUGE`, `DELTA`, `CUMULATIVE`.
*/
  metricKind?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Whether the measurement is an integer, a floating-point number, etc. Some combinations of metricKind and valueType might not be supported.
Possible values are: `BOOL`, `INT64`, `DOUBLE`, `STRING`, `DISTRIBUTION`.
*/
  valueType?: string;

  // A detailed description of the metric, which can be used in documentation.
  description?: string;

  /*
A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count".


- - -
*/
  displayName?: string;

  /*
The set of labels that can be used to describe a specific instance of this metric type. In order to delete a label, the entire resource must be deleted, then created with the desired labels.
Structure is documented below.
*/
  labels?: Array<monitoring_MetricDescriptorLabel>;

  /*
The launch stage of the metric definition.
Possible values are: `LAUNCH_STAGE_UNSPECIFIED`, `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  launchStage?: string;

  // The metric type, including its DNS name prefix. The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.
  type?: string;

  /*
The units in which the metric value is reported. It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.
Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.
If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.
Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).
*/
  unit?: string;
}
export class MetricDescriptor extends Resource {
  /*
The launch stage of the metric definition.
Possible values are: `LAUNCH_STAGE_UNSPECIFIED`, `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  public launchStage?: string;

  // If present, then a time series, which is identified partially by a metric type and a MonitoredResourceDescriptor, that is associated with this metric type can only be associated with one of the monitored resource types listed here. This field allows time series to be associated with the intersection of this metric type and the monitored resource types in this list.
  public monitoredResourceTypes?: Array<string>;

  // The resource name of the metric descriptor.
  public name?: string;

  /*
The units in which the metric value is reported. It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.
Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.
If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.
Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).
*/
  public unit?: string;

  // A detailed description of the metric, which can be used in documentation.
  public description?: string;

  /*
A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count".


- - -
*/
  public displayName?: string;

  /*
The set of labels that can be used to describe a specific instance of this metric type. In order to delete a label, the entire resource must be deleted, then created with the desired labels.
Structure is documented below.
*/
  public labels?: Array<monitoring_MetricDescriptorLabel>;

  /*
Metadata which can be used to guide usage of the metric.
Structure is documented below.
*/
  public metadata?: monitoring_MetricDescriptorMetadata;

  /*
Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metricKind and valueType might not be supported.
Possible values are: `METRIC_KIND_UNSPECIFIED`, `GAUGE`, `DELTA`, `CUMULATIVE`.
*/
  public metricKind?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The metric type, including its DNS name prefix. The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.
  public type?: string;

  /*
Whether the measurement is an integer, a floating-point number, etc. Some combinations of metricKind and valueType might not be supported.
Possible values are: `BOOL`, `INT64`, `DOUBLE`, `STRING`, `DISTRIBUTION`.
*/
  public valueType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "A detailed description of the metric, which can be used in documentation.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        'A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count".\n\n\n- - -',
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "labels",
        "The set of labels that can be used to describe a specific instance of this metric type. In order to delete a label, the entire resource must be deleted, then created with the desired labels.\nStructure is documented below.",
        monitoring_MetricDescriptorLabel_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "launchStage",
        "The launch stage of the metric definition.\nPossible values are: `LAUNCH_STAGE_UNSPECIFIED`, `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "metadata",
        "Metadata which can be used to guide usage of the metric.\nStructure is documented below.",
        monitoring_MetricDescriptorMetadata_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "metricKind",
        "Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metricKind and valueType might not be supported.\nPossible values are: `METRIC_KIND_UNSPECIFIED`, `GAUGE`, `DELTA`, `CUMULATIVE`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "valueType",
        "Whether the measurement is an integer, a floating-point number, etc. Some combinations of metricKind and valueType might not be supported.\nPossible values are: `BOOL`, `INT64`, `DOUBLE`, `STRING`, `DISTRIBUTION`.",
        [],
        true,
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
        "type",
        "The metric type, including its DNS name prefix. The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "unit",
        "The units in which the metric value is reported. It is only applicable if the\nvalueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of\nthe stored metric values.\nDifferent systems may scale the values to be more easily displayed (so a value of\n0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as\n3.5MBy). However, if the unit is KBy, then the value of the metric is always in\nthousands of bytes, no matter how it may be displayed.\nIf you want a custom metric to record the exact number of CPU-seconds used by a job,\nyou can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently\n1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as\n12005.\nAlternatively, if you want a custom metric to record data in a more granular way, you\ncan create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value\n12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).\nThe supported units are a subset of The Unified Code for Units of Measure standard.\nMore info can be found in the API documentation\n(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).",
        [],
        false,
        true,
      ),
    ];
  }
}
