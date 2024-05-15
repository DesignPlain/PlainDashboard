import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Logging_ProjectSinkBigqueryOptions,
  Logging_ProjectSinkBigqueryOptions_GetTypes,
} from "../types/Logging_ProjectSinkBigqueryOptions";
import {
  Logging_ProjectSinkExclusion,
  Logging_ProjectSinkExclusion_GetTypes,
} from "../types/Logging_ProjectSinkExclusion";

export interface ProjectSinkArgs {
  /*
The ID of the project to create the sink in. If omitted, the project associated with the provider is
used.
*/
  Project?: string;

  /*
Whether or not to create a unique identity associated with this sink. If `false`, then the `writer_identity` used is `serviceAccount:cloud-logs@system.gserviceaccount.com`. If `true` (the default),
then a unique service account is created and used for this sink. If you wish to publish logs across projects or utilize
`bigquery_options`, you must set `unique_writer_identity` to true.
*/
  UniqueWriterIdentity?: boolean;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  BigqueryOptions?: Logging_ProjectSinkBigqueryOptions;

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

  // If set to True, then this sink is disabled and it does not export any log entries.
  Disabled?: boolean;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  Exclusions?: Array<Logging_ProjectSinkExclusion>;

  // The name of the logging sink. Logging automatically creates two sinks: `_Required` and `_Default`.
  Name?: string;

  /*
A user managed service account that will be used to write
the log entries. The format must be `serviceAccount:some@email`. This field can only be specified if you are
routing logs to a destination outside this sink's project. If not specified, a Logging service account
will automatically be generated.
*/
  CustomWriterIdentity?: string;

  // A description of this sink. The maximum length of the description is 8000 characters.
  Description?: string;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  Filter?: string;
}
export class ProjectSink extends Resource {
  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  public Exclusions?: Array<Logging_ProjectSinkExclusion>;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  public Filter?: string;

  // The name of the logging sink. Logging automatically creates two sinks: `_Required` and `_Default`.
  public Name?: string;

  /*
The ID of the project to create the sink in. If omitted, the project associated with the provider is
used.
*/
  public Project?: string;

  /*
Whether or not to create a unique identity associated with this sink. If `false`, then the `writer_identity` used is `serviceAccount:cloud-logs@system.gserviceaccount.com`. If `true` (the default),
then a unique service account is created and used for this sink. If you wish to publish logs across projects or utilize
`bigquery_options`, you must set `unique_writer_identity` to true.
*/
  public UniqueWriterIdentity?: boolean;

  /*
The identity associated with this sink. This identity must be granted write access to the
configured `destination`.
*/
  public WriterIdentity?: string;

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

  // If set to True, then this sink is disabled and it does not export any log entries.
  public Disabled?: boolean;

  // A description of this sink. The maximum length of the description is 8000 characters.
  public Description?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  public BigqueryOptions?: Logging_ProjectSinkBigqueryOptions;

  /*
A user managed service account that will be used to write
the log entries. The format must be `serviceAccount:some@email`. This field can only be specified if you are
routing logs to a destination outside this sink's project. If not specified, a Logging service account
will automatically be generated.
*/
  public CustomWriterIdentity?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project to create the sink in. If omitted, the project associated with the provider is\nused.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Exclusions",
        "Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.",
        Logging_ProjectSinkExclusion_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomWriterIdentity",
        "A user managed service account that will be used to write\nthe log entries. The format must be `serviceAccount:some@email`. This field can only be specified if you are\nrouting logs to a destination outside this sink's project. If not specified, a Logging service account\nwill automatically be generated.",
        [],
        false,
        false,
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
        "Filter",
        "The filter to apply when exporting logs. Only log entries that match the filter are exported.\nSee [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to\nwrite a filter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "UniqueWriterIdentity",
        "Whether or not to create a unique identity associated with this sink. If `false`, then the `writer_identity` used is `serviceAccount:cloud-logs@system.gserviceaccount.com`. If `true` (the default),\nthen a unique service account is created and used for this sink. If you wish to publish logs across projects or utilize\n`bigquery_options`, you must set `unique_writer_identity` to true.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BigqueryOptions",
        "Options that affect sinks exporting data to BigQuery. Structure documented below.",
        Logging_ProjectSinkBigqueryOptions_GetTypes(),
        false,
        false,
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
        InputType.Bool,
        "Disabled",
        "If set to True, then this sink is disabled and it does not export any log entries.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the logging sink. Logging automatically creates two sinks: `_Required` and `_Default`.",
        [],
        false,
        true,
      ),
    ];
  }
}
