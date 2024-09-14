import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rds_ExportTaskTimeouts,
  rds_ExportTaskTimeouts_GetTypes,
} from "../types/rds_ExportTaskTimeouts";

export interface ExportTaskArgs {
  /*
Amazon Resource Name (ARN) of the snapshot to export.

The following arguments are optional:
*/
  sourceArn?: string;

  //
  timeouts?: rds_ExportTaskTimeouts;

  // Data to be exported from the snapshot. If this parameter is not provided, all the snapshot data is exported. Valid values are documented in the [AWS StartExportTask API documentation](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html#API_StartExportTask_RequestParameters).
  exportOnlies?: Array<string>;

  // Unique identifier for the snapshot export task.
  exportTaskIdentifier?: string;

  // ARN of the IAM role to use for writing to the Amazon S3 bucket.
  iamRoleArn?: string;

  // ID of the Amazon Web Services KMS key to use to encrypt the snapshot.
  kmsKeyId?: string;

  // Name of the Amazon S3 bucket to export the snapshot to.
  s3BucketName?: string;

  // Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.
  s3Prefix?: string;
}
export class ExportTask extends DS_Resource {
  // Status of the export task.
  public status?: string;

  //
  public timeouts?: rds_ExportTaskTimeouts;

  // Warning about the snapshot export task, if any.
  public warningMessage?: string;

  // Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.
  public s3Prefix?: string;

  // Time that the snapshot was created.
  public snapshotTime?: string;

  // Type of source for the export.
  public sourceType?: string;

  // Time that the snapshot export task started.
  public taskStartTime?: string;

  // Data to be exported from the snapshot. If this parameter is not provided, all the snapshot data is exported. Valid values are documented in the [AWS StartExportTask API documentation](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html#API_StartExportTask_RequestParameters).
  public exportOnlies?: Array<string>;

  // ARN of the IAM role to use for writing to the Amazon S3 bucket.
  public iamRoleArn?: string;

  // ID of the Amazon Web Services KMS key to use to encrypt the snapshot.
  public kmsKeyId?: string;

  /*
Amazon Resource Name (ARN) of the snapshot to export.

The following arguments are optional:
*/
  public sourceArn?: string;

  // Unique identifier for the snapshot export task.
  public exportTaskIdentifier?: string;

  // Reason the export failed, if it failed.
  public failureCause?: string;

  // Time that the snapshot export task completed.
  public taskEndTime?: string;

  // Progress of the snapshot export task as a percentage.
  public percentProgress?: number;

  // Name of the Amazon S3 bucket to export the snapshot to.
  public s3BucketName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "sourceArn",
        "Amazon Resource Name (ARN) of the snapshot to export.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => rds_ExportTaskTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "exportOnlies",
        "Data to be exported from the snapshot. If this parameter is not provided, all the snapshot data is exported. Valid values are documented in the [AWS StartExportTask API documentation](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_StartExportTask.html#API_StartExportTask_RequestParameters).",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "exportTaskIdentifier",
        "Unique identifier for the snapshot export task.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamRoleArn",
        "ARN of the IAM role to use for writing to the Amazon S3 bucket.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "ID of the Amazon Web Services KMS key to use to encrypt the snapshot.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3BucketName",
        "Name of the Amazon S3 bucket to export the snapshot to.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3Prefix",
        "Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
