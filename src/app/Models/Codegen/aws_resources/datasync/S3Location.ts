import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datasync_S3LocationS3Config,
  datasync_S3LocationS3Config_GetTypes,
} from "../types/datasync_S3LocationS3Config";

export interface S3LocationArgs {
  // Amazon Resource Name (ARN) of the S3 Bucket.
  s3BucketArn?: string;

  // Configuration block containing information for connecting to S3.
  s3Config?: datasync_S3LocationS3Config;

  // The Amazon S3 storage class that you want to store your files in when this location is used as a task destination. [Valid values](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes)
  s3StorageClass?: string;

  // Prefix to perform actions as source or destination.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A list of DataSync Agent ARNs with which this location will be associated.
  agentArns?: Array<string>;
}
export class S3Location extends Resource {
  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public uri?: string;

  // A list of DataSync Agent ARNs with which this location will be associated.
  public agentArns?: Array<string>;

  // Amazon Resource Name (ARN) of the S3 Bucket.
  public s3BucketArn?: string;

  // Configuration block containing information for connecting to S3.
  public s3Config?: datasync_S3LocationS3Config;

  // The Amazon S3 storage class that you want to store your files in when this location is used as a task destination. [Valid values](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes)
  public s3StorageClass?: string;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // Prefix to perform actions as source or destination.
  public subdirectory?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "agentArns",
        "A list of DataSync Agent ARNs with which this location will be associated.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3BucketArn",
        "Amazon Resource Name (ARN) of the S3 Bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "s3Config",
        "Configuration block containing information for connecting to S3.",
        datasync_S3LocationS3Config_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "s3StorageClass",
        "The Amazon S3 storage class that you want to store your files in when this location is used as a task destination. [Valid values](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Prefix to perform actions as source or destination.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
