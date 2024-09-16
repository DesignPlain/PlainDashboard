import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  logging_OrganizationSinkBigqueryOptions,
  logging_OrganizationSinkBigqueryOptions_GetTypes,
} from '../types/logging_OrganizationSinkBigqueryOptions';
import {
  logging_OrganizationSinkExclusion,
  logging_OrganizationSinkExclusion_GetTypes,
} from '../types/logging_OrganizationSinkExclusion';

export interface OrganizationSinkArgs {
  // If set to True, then this sink is disabled and it does not export any log entries.
  disabled?: boolean;

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  filter?: string;

  // The numeric ID of the organization to be exported to the sink.
  orgId?: string;

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
Whether or not to include children organizations in the sink export. If true, logs
associated with child projects are also exported; otherwise only logs relating to the provided organization are included.
*/
  includeChildren?: boolean;

  // The name of the logging sink.
  name?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  bigqueryOptions?: logging_OrganizationSinkBigqueryOptions;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  exclusions?: Array<logging_OrganizationSinkExclusion>;
}
export class OrganizationSink extends DS_Resource {
  /*
The identity associated with this sink. This identity must be granted write access to the
configured `destination`.
*/
  public writerIdentity?: string;

  // Options that affect sinks exporting data to BigQuery. Structure documented below.
  public bigqueryOptions?: logging_OrganizationSinkBigqueryOptions;

  // A description of this sink. The maximum length of the description is 8000 characters.
  public description?: string;

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

  /*
The filter to apply when exporting logs. Only log entries that match the filter are exported.
See [Advanced Log Filters](https://cloud.google.com/logging/docs/view/advanced_filters) for information on how to
write a filter.
*/
  public filter?: string;

  // The numeric ID of the organization to be exported to the sink.
  public orgId?: string;

  // If set to True, then this sink is disabled and it does not export any log entries.
  public disabled?: boolean;

  // Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.
  public exclusions?: Array<logging_OrganizationSinkExclusion>;

  /*
Whether or not to include children organizations in the sink export. If true, logs
associated with child projects are also exported; otherwise only logs relating to the provided organization are included.
*/
  public includeChildren?: boolean;

  // The name of the logging sink.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'includeChildren',
        'Whether or not to include children organizations in the sink export. If true, logs\nassociated with child projects are also exported; otherwise only logs relating to the provided organization are included.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the logging sink.',
        () => [],
        false,
        true,
      ),
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
        'orgId',
        'The numeric ID of the organization to be exported to the sink.',
        () => [],
        true,
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
        InputType.Object,
        'bigqueryOptions',
        'Options that affect sinks exporting data to BigQuery. Structure documented below.',
        () => logging_OrganizationSinkBigqueryOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'exclusions',
        'Log entries that match any of the exclusion filters will not be exported. If a log entry is matched by both `filter` and one of `exclusions.filter`, it will not be exported.  Can be repeated multiple times for multiple exclusions. Structure is documented below.',
        () => logging_OrganizationSinkExclusion_GetTypes(),
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
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of this sink. The maximum length of the description is 8000 characters.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
