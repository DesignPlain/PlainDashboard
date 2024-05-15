import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Logging_FolderSinkExclusion,
  Logging_FolderSinkExclusion_GetTypes,
} from "../types/Logging_FolderSinkExclusion";
import {
  Logging_FolderSinkBigqueryOptions,
  Logging_FolderSinkBigqueryOptions_GetTypes,
} from "../types/Logging_FolderSinkBigqueryOptions";

export interface FolderSinkArgs {
  /*
The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, a BigQuery dataset, a Cloud Logging bucket, or a Google Cloud project. Examples:

- `storage.googleapis.com/[GCS_BUCKET]`
- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`
- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]/locations/global/buckets/[BUCKET_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]`

The writer associated with the sink must have access to write to the above resource.
*/
  Destination?: string;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  Filter?: string;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  Exclusions?: Array<Logging_FolderSinkExclusion>;

  /*
The folder to be exported to the sink. Note that either `[FOLDER_ID]` or `folders/[FOLDER_ID]` is
accepted.
*/
  Folder?: string;

  /*
Whether or not to include children folders in the sink export. If true, logs
associated with child projects are also exported; otherwise only logs relating to the provided folder are included.
*/
  IncludeChildren?: boolean;

  // The name of the logging sink.
  Name?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  BigqueryOptions?: Logging_FolderSinkBigqueryOptions;

  // A description of this sink. The maximum length of the description is 8000 characters.
  Description?: string;

  // If set to True, then this sink is disabled and it does not export any log entries.
  Disabled?: boolean;
}
export class FolderSink extends Resource {
  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  public Filter?: string;

  /*
Whether or not to include children folders in the sink export. If true, logs
associated with child projects are also exported; otherwise only logs relating to the provided folder are included.
*/
  public IncludeChildren?: boolean;

  /*
The identity associated with this sink. This identity must be granted write access to the
configured `destination`.
*/
  public WriterIdentity?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  public BigqueryOptions?: Logging_FolderSinkBigqueryOptions;

  /*
The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, a BigQuery dataset, a Cloud Logging bucket, or a Google Cloud project. Examples:

- `storage.googleapis.com/[GCS_BUCKET]`
- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`
- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]/locations/global/buckets/[BUCKET_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]`

The writer associated with the sink must have access to write to the above resource.
*/
  public Destination?: string;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  public Exclusions?: Array<Logging_FolderSinkExclusion>;

  /*
The folder to be exported to the sink. Note that either `[FOLDER_ID]` or `folders/[FOLDER_ID]` is
accepted.
*/
  public Folder?: string;

  // The name of the logging sink.
  public Name?: string;

  // A description of this sink. The maximum length of the description is 8000 characters.
  public Description?: string;

  // If set to True, then this sink is disabled and it does not export any log entries.
  public Disabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of this sink. The maximum length of the description is 8000 characters.",
        [],
        false,
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
        InputType.Bool,
        "IncludeChildren",
        "Whether or not to include children folders in the sink export. If true, logs\nassociated with child projects are also exported; otherwise only logs relating to the provided folder are included.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BigqueryOptions",
        "Options that affect sinks exporting data to BigQuery. Structure documented below.",
        Logging_FolderSinkBigqueryOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Exclusions",
        "Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.",
        Logging_FolderSinkExclusion_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The folder to be exported to the sink. Note that either `[FOLDER_ID]` or `folders/[FOLDER_ID]` is\naccepted.",
        [],
        true,
        true,
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
        InputType.String,
        "Destination",
        "The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, a BigQuery dataset, a Cloud Logging bucket, or a Google Cloud project. Examples:\n\n- `storage.googleapis.com/[GCS_BUCKET]`\n- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`\n- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`\n- `logging.googleapis.com/projects/[PROJECT_ID]/locations/global/buckets/[BUCKET_ID]`\n- `logging.googleapis.com/projects/[PROJECT_ID]`\n\nThe writer associated with the sink must have access to write to the above resource.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "The filter to apply when exporting logs. Only log entries that match the filter are exported.\nSee [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to\nwrite a filter.",
        [],
        false,
        false,
      ),
    ];
  }
}
