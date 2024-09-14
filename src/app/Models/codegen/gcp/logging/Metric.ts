import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  logging_MetricMetricDescriptor,
  logging_MetricMetricDescriptor_GetTypes,
} from "../types/logging_MetricMetricDescriptor";
import {
  logging_MetricBucketOptions,
  logging_MetricBucketOptions_GetTypes,
} from "../types/logging_MetricBucketOptions";

export interface MetricArgs {
  /*
A valueExtractor is required when using a distribution logs-based metric to extract the values to
record from a log entry. Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.
*/
  valueExtractor?: string;

  /*
The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.
*/
  bucketName?: string;

  /*
The optional metric descriptor associated with the logs-based metric.
If unspecified, it uses a default metric descriptor with a DELTA metric kind,
INT64 value type, with no labels and a unit of "1". Such a metric counts the
number of log entries matching the filter expression.
Structure is documented below.
*/
  metricDescriptor?: logging_MetricMetricDescriptor;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which
is used to match log entries.


- - -
*/
  filter?: string;

  /*
A map from a label key string to an extractor expression which is used to extract data from a log
entry field and assign as the label value. Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.
*/
  labelExtractors?: Map<string, string>;

  /*
The client-assigned metric identifier. Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!-',()%!!(MISSING)/(MISSING). The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.
*/
  name?: string;

  /*
The bucketOptions are required when the logs-based metric is using a DISTRIBUTION value type and it
describes the bucket boundaries used to create a histogram of the extracted values.
Structure is documented below.
*/
  bucketOptions?: logging_MetricBucketOptions;

  /*
A description of this metric, which is used in documentation. The maximum length of the
description is 8000 characters.
*/
  description?: string;

  // If set to True, then this metric is disabled and it does not generate any points.
  disabled?: boolean;
}
export class Metric extends DS_Resource {
  /*
The client-assigned metric identifier. Examples - "error_count", "nginx/requests".
Metric identifiers are limited to 100 characters and can include only the following
characters A-Z, a-z, 0-9, and the special characters _-.,+!-',()%!!(MISSING)/(MISSING). The forward-slash
character (/) denotes a hierarchy of name pieces, and it cannot be the first character
of the name.
*/
  public name?: string;

  /*
A valueExtractor is required when using a distribution logs-based metric to extract the values to
record from a log entry. Two functions are supported for value extraction - EXTRACT(field) or
REGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which
the value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax
(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified
log entry field. The value of the field is converted to a string before applying the regex. It is an
error to specify a regex that does not include exactly one capture group.
*/
  public valueExtractor?: string;

  /*
The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects
are supported. The bucket has to be in the same project as the metric.
*/
  public bucketName?: string;

  /*
The bucketOptions are required when the logs-based metric is using a DISTRIBUTION value type and it
describes the bucket boundaries used to create a histogram of the extracted values.
Structure is documented below.
*/
  public bucketOptions?: logging_MetricBucketOptions;

  /*
An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which
is used to match log entries.


- - -
*/
  public filter?: string;

  /*
A map from a label key string to an extractor expression which is used to extract data from a log
entry field and assign as the label value. Each label key specified in the LabelDescriptor must
have an associated extractor expression in this map. The syntax of the extractor expression is
the same as for the valueExtractor field.
*/
  public labelExtractors?: Map<string, string>;

  /*
A description of this metric, which is used in documentation. The maximum length of the
description is 8000 characters.
*/
  public description?: string;

  // If set to True, then this metric is disabled and it does not generate any points.
  public disabled?: boolean;

  /*
The optional metric descriptor associated with the logs-based metric.
If unspecified, it uses a default metric descriptor with a DELTA metric kind,
INT64 value type, with no labels and a unit of "1". Such a metric counts the
number of log entries matching the filter expression.
Structure is documented below.
*/
  public metricDescriptor?: logging_MetricMetricDescriptor;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labelExtractors",
        "A map from a label key string to an extractor expression which is used to extract data from a log\nentry field and assign as the label value. Each label key specified in the LabelDescriptor must\nhave an associated extractor expression in this map. The syntax of the extractor expression is\nthe same as for the valueExtractor field.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        'The client-assigned metric identifier. Examples - "error_count", "nginx/requests".\nMetric identifiers are limited to 100 characters and can include only the following\ncharacters A-Z, a-z, 0-9, and the special characters _-.,+!*\',()%!/(MISSING). The forward-slash\ncharacter (/) denotes a hierarchy of name pieces, and it cannot be the first character\nof the name.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "If set to True, then this metric is disabled and it does not generate any points.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "filter",
        "An advanced logs filter (https://cloud.google.com/logging/docs/view/advanced-filters) which\nis used to match log entries.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bucketOptions",
        "The bucketOptions are required when the logs-based metric is using a DISTRIBUTION value type and it\ndescribes the bucket boundaries used to create a histogram of the extracted values.\nStructure is documented below.",
        () => logging_MetricBucketOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of this metric, which is used in documentation. The maximum length of the\ndescription is 8000 characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "valueExtractor",
        "A valueExtractor is required when using a distribution logs-based metric to extract the values to\nrecord from a log entry. Two functions are supported for value extraction - EXTRACT(field) or\nREGEXP_EXTRACT(field, regex). The argument are 1. field - The name of the log entry field from which\nthe value is to be extracted. 2. regex - A regular expression using the Google RE2 syntax\n(https://github.com/google/re2/wiki/Syntax) with a single capture group to extract data from the specified\nlog entry field. The value of the field is converted to a string before applying the regex. It is an\nerror to specify a regex that does not include exactly one capture group.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketName",
        "The resource name of the Log Bucket that owns the Log Metric. Only Log Buckets in projects\nare supported. The bucket has to be in the same project as the metric.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "metricDescriptor",
        'The optional metric descriptor associated with the logs-based metric.\nIf unspecified, it uses a default metric descriptor with a DELTA metric kind,\nINT64 value type, with no labels and a unit of "1". Such a metric counts the\nnumber of log entries matching the filter expression.\nStructure is documented below.',
        () => logging_MetricMetricDescriptor_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
