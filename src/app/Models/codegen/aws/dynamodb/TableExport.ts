import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TableExportArgs {
  // ID of the AWS KMS managed key used to encrypt the S3 bucket where export data will be stored (if applicable).
  s3SseKmsKeyId?: string;

  /*
ARN associated with the table to export.

The following arguments are optional:
*/
  tableArn?: string;

  // Format for the exported data. Valid values are `DYNAMODB_JSON` or `ION`. See the [AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.Output.html#S3DataExport.Output_Data) for more information on these export formats. Default is `DYNAMODB_JSON`.
  exportFormat?: string;

  // Time in RFC3339 format from which to export table data. The table export will be a snapshot of the table's state at this point in time. Omitting this value will result in a snapshot from the current time.
  exportTime?: string;

  // Name of the Amazon S3 bucket to export the snapshot to. See the [AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport_Requesting.html#S3DataExport_Requesting_Permissions) for information on how configure this S3 bucket.
  s3Bucket?: string;

  // ID of the AWS account that owns the bucket the export will be stored in.
  s3BucketOwner?: string;

  // Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.
  s3Prefix?: string;

  // Type of encryption used on the bucket where export data will be stored. Valid values are: `AES256`, `KMS`.
  s3SseAlgorithm?: string;
}
export class TableExport extends DS_Resource {
  // Billable size of the table export.
  public billedSizeInBytes?: number;

  // Time in RFC3339 format from which to export table data. The table export will be a snapshot of the table's state at this point in time. Omitting this value will result in a snapshot from the current time.
  public exportTime?: string;

  // Number of items exported.
  public itemCount?: number;

  // ID of the AWS account that owns the bucket the export will be stored in.
  public s3BucketOwner?: string;

  // Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.
  public s3Prefix?: string;

  // ID of the AWS KMS managed key used to encrypt the S3 bucket where export data will be stored (if applicable).
  public s3SseKmsKeyId?: string;

  // Status of the export - export can be in one of the following states `IN_PROGRESS`, `COMPLETED`, or `FAILED`.
  public exportStatus?: string;

  // Format for the exported data. Valid values are `DYNAMODB_JSON` or `ION`. See the [AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.Output.html#S3DataExport.Output_Data) for more information on these export formats. Default is `DYNAMODB_JSON`.
  public exportFormat?: string;

  // Name of the manifest file for the export task. See the [AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.Output.html#S3DataExport.Output_Manifest) for more information on this manifest file.
  public manifestFilesS3Key?: string;

  /*
ARN associated with the table to export.

The following arguments are optional:
*/
  public tableArn?: string;

  // ARN of the Table Export.
  public arn?: string;

  // Time at which the export task completed.
  public endTime?: string;

  // Name of the Amazon S3 bucket to export the snapshot to. See the [AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport_Requesting.html#S3DataExport_Requesting_Permissions) for information on how configure this S3 bucket.
  public s3Bucket?: string;

  // Type of encryption used on the bucket where export data will be stored. Valid values are: `AES256`, `KMS`.
  public s3SseAlgorithm?: string;

  // Time at which the export task began.
  public startTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "s3Bucket",
        "Name of the Amazon S3 bucket to export the snapshot to. See the [AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport_Requesting.html#S3DataExport_Requesting_Permissions) for information on how configure this S3 bucket.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3BucketOwner",
        "ID of the AWS account that owns the bucket the export will be stored in.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3Prefix",
        "Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3SseAlgorithm",
        "Type of encryption used on the bucket where export data will be stored. Valid values are: `AES256`, `KMS`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3SseKmsKeyId",
        "ID of the AWS KMS managed key used to encrypt the S3 bucket where export data will be stored (if applicable).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableArn",
        "ARN associated with the table to export.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "exportFormat",
        "Format for the exported data. Valid values are `DYNAMODB_JSON` or `ION`. See the [AWS Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/S3DataExport.Output.html#S3DataExport.Output_Data) for more information on these export formats. Default is `DYNAMODB_JSON`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "exportTime",
        "Time in RFC3339 format from which to export table data. The table export will be a snapshot of the table's state at this point in time. Omitting this value will result in a snapshot from the current time.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
