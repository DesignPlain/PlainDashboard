import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ProjectBucketConfigIndexConfig } from "../types/ProjectBucketConfigIndexConfig";
import { ProjectBucketConfigCmekSettings } from "../types/ProjectBucketConfigCmekSettings";

export interface ProjectBucketConfigArgs {
  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  BucketId?: string;

  // The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.
  CmekSettings?: ProjectBucketConfigCmekSettings;

  // Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the --Log Analytics-- page using SQL queries. Cannot be disabled once enabled.
  EnableAnalytics?: boolean;

  // A list of indexed fields and related configuration data. Structure is documented below.
  IndexConfigs?: Array<ProjectBucketConfigIndexConfig>;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  RetentionDays?: number;

  // Describes this bucket.
  Description?: string;

  // The location of the bucket.
  Location?: string;

  // Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.
  Locked?: boolean;

  // The parent resource that contains the logging bucket.
  Project?: string;
}
export class ProjectBucketConfig extends Resource {
  // The bucket's lifecycle such as active or deleted. See [LifecycleState](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.buckets#LogBucket.LifecycleState).
  public LifecycleState?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  public RetentionDays?: number;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  public BucketId?: string;

  // The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.
  public CmekSettings?: ProjectBucketConfigCmekSettings;

  // Describes this bucket.
  public Description?: string;

  // Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the --Log Analytics-- page using SQL queries. Cannot be disabled once enabled.
  public EnableAnalytics?: boolean;

  // A list of indexed fields and related configuration data. Structure is documented below.
  public IndexConfigs?: Array<ProjectBucketConfigIndexConfig>;

  // The location of the bucket.
  public Location?: string;

  // Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.
  public Locked?: boolean;

  // The resource name of the CMEK settings.
  public Name?: string;

  // The parent resource that contains the logging bucket.
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "Locked",
        "Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The parent resource that contains the logging bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CmekSettings",
        "The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableAnalytics",
        "Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the **Log Analytics** page using SQL queries. Cannot be disabled once enabled.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "IndexConfigs",
        "A list of indexed fields and related configuration data. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "RetentionDays",
        "Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Describes this bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BucketId",
        "The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the bucket.",
      ),
    ];
  }
}
