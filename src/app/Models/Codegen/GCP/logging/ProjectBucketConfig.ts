import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Logging_ProjectBucketConfigCmekSettings,
  Logging_ProjectBucketConfigCmekSettings_GetTypes,
} from "../types/Logging_ProjectBucketConfigCmekSettings";
import {
  Logging_ProjectBucketConfigIndexConfig,
  Logging_ProjectBucketConfigIndexConfig_GetTypes,
} from "../types/Logging_ProjectBucketConfigIndexConfig";

export interface ProjectBucketConfigArgs {
  // The location of the bucket.
  Location?: string;

  // The parent resource that contains the logging bucket.
  Project?: string;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  BucketId?: string;

  // The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.
  CmekSettings?: Logging_ProjectBucketConfigCmekSettings;

  // Describes this bucket.
  Description?: string;

  // Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the --Log Analytics-- page using SQL queries. Cannot be disabled once enabled.
  EnableAnalytics?: boolean;

  // A list of indexed fields and related configuration data. Structure is documented below.
  IndexConfigs?: Array<Logging_ProjectBucketConfigIndexConfig>;

  // Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.
  Locked?: boolean;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  RetentionDays?: number;
}
export class ProjectBucketConfig extends Resource {
  // The location of the bucket.
  public Location?: string;

  // The resource name of the CMEK settings.
  public Name?: string;

  // The parent resource that contains the logging bucket.
  public Project?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  public RetentionDays?: number;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  public BucketId?: string;

  // The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.
  public CmekSettings?: Logging_ProjectBucketConfigCmekSettings;

  // Describes this bucket.
  public Description?: string;

  // Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the --Log Analytics-- page using SQL queries. Cannot be disabled once enabled.
  public EnableAnalytics?: boolean;

  // A list of indexed fields and related configuration data. Structure is documented below.
  public IndexConfigs?: Array<Logging_ProjectBucketConfigIndexConfig>;

  // The bucket's lifecycle such as active or deleted. See [LifecycleState](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.buckets#LogBucket.LifecycleState).
  public LifecycleState?: string;

  // Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.
  public Locked?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.",
        [],
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
        InputType.Bool,
        "EnableAnalytics",
        "Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the **Log Analytics** page using SQL queries. Cannot be disabled once enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "IndexConfigs",
        "A list of indexed fields and related configuration data. Structure is documented below.",
        Logging_ProjectBucketConfigIndexConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Locked",
        "Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The parent resource that contains the logging bucket.",
        [],
        true,
        true,
      ),
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
        "The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.",
        Logging_ProjectBucketConfigCmekSettings_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
