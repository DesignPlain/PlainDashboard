import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BillingAccountBucketConfigCmekSettings } from "../types/BillingAccountBucketConfigCmekSettings";
import { BillingAccountBucketConfigIndexConfig } from "../types/BillingAccountBucketConfigIndexConfig";

export interface BillingAccountBucketConfigArgs {
  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  RetentionDays?: number;

  // The parent resource that contains the logging bucket.
  BillingAccount?: string;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  BucketId?: string;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  CmekSettings?: BillingAccountBucketConfigCmekSettings;

  // Describes this bucket.
  Description?: string;

  // A list of indexed fields and related configuration data. Structure is documented below.
  IndexConfigs?: Array<BillingAccountBucketConfigIndexConfig>;

  // The location of the bucket.
  Location?: string;
}
export class BillingAccountBucketConfig extends Resource {
  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  public BucketId?: string;

  // Describes this bucket.
  public Description?: string;

  // The resource name of the bucket. For example: "projects/my-project-id/locations/my-location/buckets/my-bucket-id"
  public Name?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  public RetentionDays?: number;

  // The parent resource that contains the logging bucket.
  public BillingAccount?: string;

  // A list of indexed fields and related configuration data. Structure is documented below.
  public IndexConfigs?: Array<BillingAccountBucketConfigIndexConfig>;

  // The bucket's lifecycle such as active or deleted. See [LifecycleState](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.buckets#LogBucket.LifecycleState).
  public LifecycleState?: string;

  // The location of the bucket.
  public Location?: string;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  public CmekSettings?: BillingAccountBucketConfigCmekSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BillingAccount",
        "The parent resource that contains the logging bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BucketId",
        "The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CmekSettings",
        "The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK\nkey provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by\nupdating the log bucket. Changing the KMS key is allowed.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Describes this bucket.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "IndexConfigs",
        "A list of indexed fields and related configuration data. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the bucket.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "RetentionDays",
        "Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.",
      ),
    ];
  }
}
