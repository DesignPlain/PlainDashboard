import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Logging_BillingAccountSinkBigqueryOptions,
  Logging_BillingAccountSinkBigqueryOptions_GetTypes,
} from "../types/Logging_BillingAccountSinkBigqueryOptions";
import {
  Logging_BillingAccountSinkExclusion,
  Logging_BillingAccountSinkExclusion_GetTypes,
} from "../types/Logging_BillingAccountSinkExclusion";

export interface BillingAccountSinkArgs {
  // The name of the logging sink.
  Name?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  BigqueryOptions?: Logging_BillingAccountSinkBigqueryOptions;

  // The billing account exported to the sink.
  BillingAccount?: string;

  // A description of this sink. The maximum length of the description is 8000 characters.
  Description?: string;

  /*
The destination of the sink (or, in other words, where logs are written to). Can be a
Cloud Storage bucket, a PubSub topic, a BigQuery dataset or a Cloud Logging bucket. Examples:

- `storage.googleapis.com/[GCS_BUCKET]`
- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`
- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]]/locations/global/buckets/[BUCKET_ID]`

The writer associated with the sink must have access to write to the above resource.
*/
  Destination?: string;

  // If set to True, then this sink is disabled and it does not export any log entries.
  Disabled?: boolean;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  Exclusions?: Array<Logging_BillingAccountSinkExclusion>;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  Filter?: string;
}
export class BillingAccountSink extends Resource {
  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  public Exclusions?: Array<Logging_BillingAccountSinkExclusion>;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  public Filter?: string;

  // The name of the logging sink.
  public Name?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  public BigqueryOptions?: Logging_BillingAccountSinkBigqueryOptions;

  // A description of this sink. The maximum length of the description is 8000 characters.
  public Description?: string;

  /*
The destination of the sink (or, in other words, where logs are written to). Can be a
Cloud Storage bucket, a PubSub topic, a BigQuery dataset or a Cloud Logging bucket. Examples:

- `storage.googleapis.com/[GCS_BUCKET]`
- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`
- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]]/locations/global/buckets/[BUCKET_ID]`

The writer associated with the sink must have access to write to the above resource.
*/
  public Destination?: string;

  // The billing account exported to the sink.
  public BillingAccount?: string;

  // If set to True, then this sink is disabled and it does not export any log entries.
  public Disabled?: boolean;

  /*
The identity associated with this sink. This identity must be granted write access to the
configured `destination`.
*/
  public WriterIdentity?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "The filter to apply when exporting logs. Only log entries that match the filter are exported.\nSee [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to\nwrite a filter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the logging sink.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BigqueryOptions",
        "Options that affect sinks exporting data to BigQuery. Structure documented below.",
        Logging_BillingAccountSinkBigqueryOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BillingAccount",
        "The billing account exported to the sink.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of this sink. The maximum length of the description is 8000 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Destination",
        "The destination of the sink (or, in other words, where logs are written to). Can be a\nCloud Storage bucket, a PubSub topic, a BigQuery dataset or a Cloud Logging bucket. Examples:\n\n- `storage.googleapis.com/[GCS_BUCKET]`\n- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`\n- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`\n- `logging.googleapis.com/projects/[PROJECT_ID]]/locations/global/buckets/[BUCKET_ID]`\n\nThe writer associated with the sink must have access to write to the above resource.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Disabled",
        "If set to True, then this sink is disabled and it does not export any log entries.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Exclusions",
        "Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.",
        Logging_BillingAccountSinkExclusion_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
