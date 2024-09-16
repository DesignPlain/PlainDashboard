import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ReportDefinitionArgs {
  // A list of additional artifacts. Valid values are: `REDSHIFT`, `QUICKSIGHT`, `ATHENA`. When ATHENA exists within additional_artifacts, no other artifact type can be declared and report_versioning must be `OVERWRITE_REPORT`.
  additionalArtifacts?: Array<string>;

  // A list of schema elements. Valid values are: `RESOURCES`, `SPLIT_COST_ALLOCATION_DATA`.
  additionalSchemaElements?: Array<string>;

  // Set to true to update your reports after they have been finalized if AWS detects charges related to previous months.
  refreshClosedReports?: boolean;

  // Unique name for the report. Must start with a number/letter and is case sensitive. Limited to 256 characters.
  reportName?: string;

  // Overwrite the previous version of each report or to deliver the report in addition to the previous versions. Valid values are: `CREATE_NEW_REPORT` and `OVERWRITE_REPORT`.
  reportVersioning?: string;

  // Report path prefix. Limited to 256 characters.
  s3Prefix?: string;

  // Region of the existing S3 bucket to hold generated reports.
  s3Region?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The frequency on which report data are measured and displayed.  Valid values are: `DAILY`, `HOURLY`, `MONTHLY`.
  timeUnit?: string;

  // Compression format for report. Valid values are: `GZIP`, `ZIP`, `Parquet`. If `Parquet` is used, then format must also be `Parquet`.
  compression?: string;

  // Format for report. Valid values are: `textORcsv`, `Parquet`. If `Parquet` is used, then Compression must also be `Parquet`.
  format?: string;

  // Name of the existing S3 bucket to hold generated reports.
  s3Bucket?: string;
}
export class ReportDefinition extends DS_Resource {
  // Format for report. Valid values are: `textORcsv`, `Parquet`. If `Parquet` is used, then Compression must also be `Parquet`.
  public format?: string;

  // Set to true to update your reports after they have been finalized if AWS detects charges related to previous months.
  public refreshClosedReports?: boolean;

  // Report path prefix. Limited to 256 characters.
  public s3Prefix?: string;

  // The frequency on which report data are measured and displayed.  Valid values are: `DAILY`, `HOURLY`, `MONTHLY`.
  public timeUnit?: string;

  // A list of schema elements. Valid values are: `RESOURCES`, `SPLIT_COST_ALLOCATION_DATA`.
  public additionalSchemaElements?: Array<string>;

  // The Amazon Resource Name (ARN) specifying the cur report.
  public arn?: string;

  // A list of additional artifacts. Valid values are: `REDSHIFT`, `QUICKSIGHT`, `ATHENA`. When ATHENA exists within additional_artifacts, no other artifact type can be declared and report_versioning must be `OVERWRITE_REPORT`.
  public additionalArtifacts?: Array<string>;

  // Name of the existing S3 bucket to hold generated reports.
  public s3Bucket?: string;

  // Region of the existing S3 bucket to hold generated reports.
  public s3Region?: string;

  // Overwrite the previous version of each report or to deliver the report in addition to the previous versions. Valid values are: `CREATE_NEW_REPORT` and `OVERWRITE_REPORT`.
  public reportVersioning?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Compression format for report. Valid values are: `GZIP`, `ZIP`, `Parquet`. If `Parquet` is used, then format must also be `Parquet`.
  public compression?: string;

  // Unique name for the report. Must start with a number/letter and is case sensitive. Limited to 256 characters.
  public reportName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'additionalSchemaElements',
        'A list of schema elements. Valid values are: `RESOURCES`, `SPLIT_COST_ALLOCATION_DATA`.',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        's3Prefix',
        'Report path prefix. Limited to 256 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'format',
        'Format for report. Valid values are: `textORcsv`, `Parquet`. If `Parquet` is used, then Compression must also be `Parquet`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        's3Bucket',
        'Name of the existing S3 bucket to hold generated reports.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'timeUnit',
        'The frequency on which report data are measured and displayed.  Valid values are: `DAILY`, `HOURLY`, `MONTHLY`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'compression',
        'Compression format for report. Valid values are: `GZIP`, `ZIP`, `Parquet`. If `Parquet` is used, then format must also be `Parquet`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'additionalArtifacts',
        'A list of additional artifacts. Valid values are: `REDSHIFT`, `QUICKSIGHT`, `ATHENA`. When ATHENA exists within additional_artifacts, no other artifact type can be declared and report_versioning must be `OVERWRITE_REPORT`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'refreshClosedReports',
        'Set to true to update your reports after they have been finalized if AWS detects charges related to previous months.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'reportName',
        'Unique name for the report. Must start with a number/letter and is case sensitive. Limited to 256 characters.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'reportVersioning',
        'Overwrite the previous version of each report or to deliver the report in addition to the previous versions. Valid values are: `CREATE_NEW_REPORT` and `OVERWRITE_REPORT`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        's3Region',
        'Region of the existing S3 bucket to hold generated reports.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
