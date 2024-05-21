import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  logging_BillingAccountSinkExclusion,
  logging_BillingAccountSinkExclusion_GetTypes,
} from "../types/logging_BillingAccountSinkExclusion";
import {
  logging_BillingAccountSinkBigqueryOptions,
  logging_BillingAccountSinkBigqueryOptions_GetTypes,
} from "../types/logging_BillingAccountSinkBigqueryOptions";

export interface BillingAccountSinkArgs {
  // If set to True, then this sink is disabled and it does not export any log entries.
  disabled?: boolean;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  exclusions?: Array<logging_BillingAccountSinkExclusion>;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  filter?: string;

  // The name of the logging sink.
  name?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  bigqueryOptions?: logging_BillingAccountSinkBigqueryOptions;

  // The billing account exported to the sink.
  billingAccount?: string;

  // A description of this sink. The maximum length of the description is 8000 characters.
  description?: string;

  /*
The destination of the sink (or, in other words, where logs are written to). Can be a
Cloud Storage bucket, a PubSub topic, a BigQuery dataset or a Cloud Logging bucket. Examples:

- `storage.googleapis.com/[GCS_BUCKET]`
- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`
- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]]/locations/global/buckets/[BUCKET_ID]`

The writer associated with the sink must have access to write to the above resource.
*/
  destination?: string;
}
export class BillingAccountSink extends Resource {
  // The name of the logging sink.
  public name?: string;

  /*
The identity associated with this sink. This identity must be granted write access to the
configured `destination`.
*/
  public writerIdentity?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  public bigqueryOptions?: logging_BillingAccountSinkBigqueryOptions;

  // The billing account exported to the sink.
  public billingAccount?: string;

  /*
The destination of the sink (or, in other words, where logs are written to). Can be a
Cloud Storage bucket, a PubSub topic, a BigQuery dataset or a Cloud Logging bucket. Examples:

- `storage.googleapis.com/[GCS_BUCKET]`
- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`
- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]]/locations/global/buckets/[BUCKET_ID]`

The writer associated with the sink must have access to write to the above resource.
*/
  public destination?: string;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  public filter?: string;

  // A description of this sink. The maximum length of the description is 8000 characters.
  public description?: string;

  // If set to True, then this sink is disabled and it does not export any log entries.
  public disabled?: boolean;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  public exclusions?: Array<logging_BillingAccountSinkExclusion>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "filter",
        "The filter to apply when exporting logs. Only log entries that match the filter are exported.\nSee [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to\nwrite a filter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the logging sink.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bigqueryOptions",
        "Options that affect sinks exporting data to BigQuery. Structure documented below.",
        logging_BillingAccountSinkBigqueryOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "billingAccount",
        "The billing account exported to the sink.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of this sink. The maximum length of the description is 8000 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destination",
        "The destination of the sink (or, in other words, where logs are written to). Can be a\nCloud Storage bucket, a PubSub topic, a BigQuery dataset or a Cloud Logging bucket. Examples:\n\n- `storage.googleapis.com/[GCS_BUCKET]`\n- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`\n- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`\n- `logging.googleapis.com/projects/[PROJECT_ID]]/locations/global/buckets/[BUCKET_ID]`\n\nThe writer associated with the sink must have access to write to the above resource.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "If set to True, then this sink is disabled and it does not export any log entries.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "exclusions",
        "Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.",
        logging_BillingAccountSinkExclusion_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
