import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  logging_ProjectSinkBigqueryOptions,
  logging_ProjectSinkBigqueryOptions_GetTypes,
} from '../types/logging_ProjectSinkBigqueryOptions';
import {
  logging_ProjectSinkExclusion,
  logging_ProjectSinkExclusion_GetTypes,
} from '../types/logging_ProjectSinkExclusion';

export interface ProjectSinkArgs {
  /*
Whether or not to create a unique identity associated with this sink. If `false`, then the `writer_identity` used is `serviceAccount:cloud-logs@system.gserviceaccount.com`. If `true` (the default),
then a unique service account is created and used for this sink. If you wish to publish logs across projects or utilize
`bigquery_options`, you must set `unique_writer_identity` to true.
*/
  uniqueWriterIdentity?: boolean;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  bigqueryOptions?: logging_ProjectSinkBigqueryOptions;

  // If set to True, then this sink is disabled and it does not export any log entries.
  disabled?: boolean;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  exclusions?: Array<logging_ProjectSinkExclusion>;

  // The name of the logging sink. Logging automatically creates two sinks: `_Required` and `_Default`.
  name?: string;

  /*
The ID of the project to create the sink in. If omitted, the project associated with the provider is
used.
*/
  project?: string;

  /*
A user managed service account that will be used to write
the log entries. The format must be `serviceAccount:some@email`. This field can only be specified if you are
routing logs to a destination outside this sink's project. If not specified, a Logging service account
will automatically be generated.
*/
  customWriterIdentity?: string;

  // A description of this sink. The maximum length of the description is 8000 characters.
  description?: string;

  /*
The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, a BigQuery dataset, a Cloud Logging bucket, or a Google Cloud project. Examples:

- `storage.googleapis.com/[GCS_BUCKET]`
- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`
- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]/locations/global/buckets/[BUCKET_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]`

The writer associated with the sink must have access to write to the above resource.
*/
  destination?: string;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  filter?: string;
}
export class ProjectSink extends DS_Resource {
  /*
Whether or not to create a unique identity associated with this sink. If `false`, then the `writer_identity` used is `serviceAccount:cloud-logs@system.gserviceaccount.com`. If `true` (the default),
then a unique service account is created and used for this sink. If you wish to publish logs across projects or utilize
`bigquery_options`, you must set `unique_writer_identity` to true.
*/
  public uniqueWriterIdentity?: boolean;

  /*
The identity associated with this sink. This identity must be granted write access to the
configured `destination`.
*/
  public writerIdentity?: string;

  /*
A user managed service account that will be used to write
the log entries. The format must be `serviceAccount:some@email`. This field can only be specified if you are
routing logs to a destination outside this sink's project. If not specified, a Logging service account
will automatically be generated.
*/
  public customWriterIdentity?: string;

  // A description of this sink. The maximum length of the description is 8000 characters.
  public description?: string;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  public exclusions?: Array<logging_ProjectSinkExclusion>;

  /*
The ID of the project to create the sink in. If omitted, the project associated with the provider is
used.
*/
  public project?: string;

  // The name of the logging sink. Logging automatically creates two sinks: `_Required` and `_Default`.
  public name?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  public bigqueryOptions?: logging_ProjectSinkBigqueryOptions;

  /*
The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, a BigQuery dataset, a Cloud Logging bucket, or a Google Cloud project. Examples:

- `storage.googleapis.com/[GCS_BUCKET]`
- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`
- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]/locations/global/buckets/[BUCKET_ID]`
- `logging.googleapis.com/projects/[PROJECT_ID]`

The writer associated with the sink must have access to write to the above resource.
*/
  public destination?: string;

  // If set to True, then this sink is disabled and it does not export any log entries.
  public disabled?: boolean;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  public filter?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'disabled',
        'If set to True, then this sink is disabled and it does not export any log entries.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'destination',
        'The destination of the sink (or, in other words, where logs are written to). Can be a Cloud Storage bucket, a PubSub topic, a BigQuery dataset, a Cloud Logging bucket, or a Google Cloud project. Examples:\n\n- `storage.googleapis.com/[GCS_BUCKET]`\n- `bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]`\n- `pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]`\n- `logging.googleapis.com/projects/[PROJECT_ID]/locations/global/buckets/[BUCKET_ID]`\n- `logging.googleapis.com/projects/[PROJECT_ID]`\n\nThe writer associated with the sink must have access to write to the above resource.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'uniqueWriterIdentity',
        'Whether or not to create a unique identity associated with this sink. If `false`, then the `writer_identity` used is `serviceAccount:cloud-logs@system.gserviceaccount.com`. If `true` (the default),\nthen a unique service account is created and used for this sink. If you wish to publish logs across projects or utilize\n`bigquery_options`, you must set `unique_writer_identity` to true.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'bigqueryOptions',
        'Options that affect sinks exporting data to BigQuery. Structure documented below.',
        () => logging_ProjectSinkBigqueryOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'exclusions',
        'Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.',
        () => logging_ProjectSinkExclusion_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the logging sink. Logging automatically creates two sinks: `_Required` and `_Default`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project to create the sink in. If omitted, the project associated with the provider is\nused.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'customWriterIdentity',
        "A user managed service account that will be used to write\nthe log entries. The format must be `serviceAccount:some@email`. This field can only be specified if you are\nrouting logs to a destination outside this sink's project. If not specified, a Logging service account\nwill automatically be generated.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of this sink. The maximum length of the description is 8000 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'filter',
        'The filter to apply when exporting logs. Only log entries that match the filter are exported.\nSee [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to\nwrite a filter.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
