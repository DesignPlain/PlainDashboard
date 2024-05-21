import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  logging_FolderBucketConfigIndexConfig,
  logging_FolderBucketConfigIndexConfig_GetTypes,
} from "../types/logging_FolderBucketConfigIndexConfig";
import {
  logging_FolderBucketConfigCmekSettings,
  logging_FolderBucketConfigCmekSettings_GetTypes,
} from "../types/logging_FolderBucketConfigCmekSettings";

export interface FolderBucketConfigArgs {
  // Describes this bucket.
  description?: string;

  // The parent resource that contains the logging bucket.
  folder?: string;

  // A list of indexed fields and related configuration data. Structure is documented below.
  indexConfigs?: Array<logging_FolderBucketConfigIndexConfig>;

  // The location of the bucket.
  location?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  retentionDays?: number;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  bucketId?: string;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  cmekSettings?: logging_FolderBucketConfigCmekSettings;
}
export class FolderBucketConfig extends Resource {
  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  public bucketId?: string;

  // Describes this bucket.
  public description?: string;

  // The parent resource that contains the logging bucket.
  public folder?: string;

  // A list of indexed fields and related configuration data. Structure is documented below.
  public indexConfigs?: Array<logging_FolderBucketConfigIndexConfig>;

  // The bucket's lifecycle such as active or deleted. See [LifecycleState](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.buckets#LogBucket.LifecycleState).
  public lifecycleState?: string;

  // The location of the bucket.
  public location?: string;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  public cmekSettings?: logging_FolderBucketConfigCmekSettings;

  // The resource name of the bucket. For example: "folders/my-folder-id/locations/my-location/buckets/my-bucket-id"
  public name?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  public retentionDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "folder",
        "The parent resource that contains the logging bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "indexConfigs",
        "A list of indexed fields and related configuration data. Structure is documented below.",
        logging_FolderBucketConfigIndexConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionDays",
        "Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketId",
        "The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cmekSettings",
        "The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK\nkey provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by\nupdating the log bucket. Changing the KMS key is allowed.",
        logging_FolderBucketConfigCmekSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Describes this bucket.",
        [],
        false,
        false,
      ),
    ];
  }
}
