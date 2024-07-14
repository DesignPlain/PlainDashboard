import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface CustomDbEngineVersionArgs {
  // The name of the database engine. Valid values are `custom-oracle-`, `custom-sqlserver-`.
  engine?: string;

  // The version of the database engine.
  engineVersion?: string;

  // The manifest file, in JSON format, that contains the list of database installation files. Conflicts with `filename`.
  manifest?: string;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the manifest source specified with `filename`. The usual way to set this is filebase64sha256("manifest.json") where "manifest.json" is the local filename of the manifest source.
  manifestHash?: string;

  // The ID of the AMI to create the CEV from. Required for RDS Custom for SQL Server. For RDS Custom for Oracle, you can specify an AMI ID that was used in a different Oracle CEV.
  sourceImageId?: string;

  // The status of the CEV. Valid values are `available`, `inactive`, `inactive-except-restore`.
  status?: string;

  // The name of the Amazon S3 bucket that contains the database installation files.
  databaseInstallationFilesS3BucketName?: string;

  // The prefix for the Amazon S3 bucket that contains the database installation files.
  databaseInstallationFilesS3Prefix?: string;

  // The description of the CEV.
  description?: string;

  // The name of the manifest file within the local filesystem. Conflicts with `manifest`.
  filename?: string;

  // The ARN of the AWS KMS key that is used to encrypt the database installation files. Required for RDS Custom for Oracle.
  kmsKeyId?: string;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class CustomDbEngineVersion extends Resource {
  // The description of the CEV.
  public description?: string;

  // The ID of the AMI to create the CEV from. Required for RDS Custom for SQL Server. For RDS Custom for Oracle, you can specify an AMI ID that was used in a different Oracle CEV.
  public sourceImageId?: string;

  // The date and time that the CEV was created.
  public createTime?: string;

  // The name of the Amazon S3 bucket that contains the database installation files.
  public databaseInstallationFilesS3BucketName?: string;

  // The name of the DB parameter group family for the CEV.
  public dbParameterGroupFamily?: string;

  // The status of the CEV. Valid values are `available`, `inactive`, `inactive-except-restore`.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) for the custom engine version.
  public arn?: string;

  // The prefix for the Amazon S3 bucket that contains the database installation files.
  public databaseInstallationFilesS3Prefix?: string;

  // The version of the database engine.
  public engineVersion?: string;

  // The name of the manifest file within the local filesystem. Conflicts with `manifest`.
  public filename?: string;

  // The manifest file, in JSON format, that contains the list of database installation files. Conflicts with `filename`.
  public manifest?: string;

  // Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the manifest source specified with `filename`. The usual way to set this is filebase64sha256("manifest.json") where "manifest.json" is the local filename of the manifest source.
  public manifestHash?: string;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name of the database engine. Valid values are `custom-oracle-`, `custom-sqlserver-`.
  public engine?: string;

  // The ID of the AMI that was created with the CEV.
  public imageId?: string;

  // The ARN of the AWS KMS key that is used to encrypt the database installation files. Required for RDS Custom for Oracle.
  public kmsKeyId?: string;

  // The major version of the database engine.
  public majorEngineVersion?: string;

  // The returned manifest file, in JSON format, service generated and often different from input `manifest`.
  public manifestComputed?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "engineVersion",
        "The version of the database engine.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "manifest",
        "The manifest file, in JSON format, that contains the list of database installation files. Conflicts with `filename`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "filename",
        "The name of the manifest file within the local filesystem. Conflicts with `manifest`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the CEV.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The ARN of the AWS KMS key that is used to encrypt the database installation files. Required for RDS Custom for Oracle.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "engine",
        "The name of the database engine. Valid values are `custom-oracle*`, `custom-sqlserver*`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "manifestHash",
        'Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the manifest source specified with `filename`. The usual way to set this is filebase64sha256("manifest.json") where "manifest.json" is the local filename of the manifest source.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceImageId",
        "The ID of the AMI to create the CEV from. Required for RDS Custom for SQL Server. For RDS Custom for Oracle, you can specify an AMI ID that was used in a different Oracle CEV.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status of the CEV. Valid values are `available`, `inactive`, `inactive-except-restore`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseInstallationFilesS3BucketName",
        "The name of the Amazon S3 bucket that contains the database installation files.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseInstallationFilesS3Prefix",
        "The prefix for the Amazon S3 bucket that contains the database installation files.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
