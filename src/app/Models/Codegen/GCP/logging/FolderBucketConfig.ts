import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Logging_FolderBucketConfigCmekSettings,
  Logging_FolderBucketConfigCmekSettings_GetTypes,
} from "../types/Logging_FolderBucketConfigCmekSettings";
import {
  Logging_FolderBucketConfigIndexConfig,
  Logging_FolderBucketConfigIndexConfig_GetTypes,
} from "../types/Logging_FolderBucketConfigIndexConfig";

export interface FolderBucketConfigArgs {
  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  RetentionDays?: number;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  BucketId?: string;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  CmekSettings?: Logging_FolderBucketConfigCmekSettings;

  // Describes this bucket.
  Description?: string;

  // The parent resource that contains the logging bucket.
  Folder?: string;

  // A list of indexed fields and related configuration data. Structure is documented below.
  IndexConfigs?: Array<Logging_FolderBucketConfigIndexConfig>;

  // The location of the bucket.
  Location?: string;
}
export class FolderBucketConfig extends Resource {
  // A list of indexed fields and related configuration data. Structure is documented below.
  public IndexConfigs?: Array<Logging_FolderBucketConfigIndexConfig>;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  public BucketId?: string;

  // Describes this bucket.
  public Description?: string;

  // The bucket's lifecycle such as active or deleted. See [LifecycleState](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.buckets#LogBucket.LifecycleState).
  public LifecycleState?: string;

  // The location of the bucket.
  public Location?: string;

  // The resource name of the bucket. For example: "folders/my-folder-id/locations/my-location/buckets/my-bucket-id"
  public Name?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  public RetentionDays?: number;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  public CmekSettings?: Logging_FolderBucketConfigCmekSettings;

  // The parent resource that contains the logging bucket.
  public Folder?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BucketId",
        "The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CmekSettings",
        "The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK\nkey provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by\nupdating the log bucket. Changing the KMS key is allowed.",
        Logging_FolderBucketConfigCmekSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Describes this bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The parent resource that contains the logging bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "IndexConfigs",
        "A list of indexed fields and related configuration data. Structure is documented below.",
        Logging_FolderBucketConfigIndexConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "RetentionDays",
        "Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.",
        [],
        false,
        false,
      ),
    ];
  }
}
