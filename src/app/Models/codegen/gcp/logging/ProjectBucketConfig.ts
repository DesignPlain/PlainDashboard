import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  logging_ProjectBucketConfigIndexConfig,
  logging_ProjectBucketConfigIndexConfig_GetTypes,
} from "../types/logging_ProjectBucketConfigIndexConfig";
import {
  logging_ProjectBucketConfigCmekSettings,
  logging_ProjectBucketConfigCmekSettings_GetTypes,
} from "../types/logging_ProjectBucketConfigCmekSettings";

export interface ProjectBucketConfigArgs {
  // A list of indexed fields and related configuration data. Structure is documented below.
  indexConfigs?: Array<logging_ProjectBucketConfigIndexConfig>;

  // The parent resource that contains the logging bucket.
  project?: string;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  bucketId?: string;

  // Describes this bucket.
  description?: string;

  // Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the --Log Analytics-- page using SQL queries. Cannot be disabled once enabled.
  enableAnalytics?: boolean;

  // The location of the bucket.
  location?: string;

  // Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.
  locked?: boolean;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  retentionDays?: number;

  // The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.
  cmekSettings?: logging_ProjectBucketConfigCmekSettings;
}
export class ProjectBucketConfig extends DS_Resource {
  // Describes this bucket.
  public description?: string;

  // A list of indexed fields and related configuration data. Structure is documented below.
  public indexConfigs?: Array<logging_ProjectBucketConfigIndexConfig>;

  // The location of the bucket.
  public location?: string;

  // Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.
  public locked?: boolean;

  // The resource name of the CMEK settings.
  public name?: string;

  // The parent resource that contains the logging bucket.
  public project?: string;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  public bucketId?: string;

  // The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.
  public cmekSettings?: logging_ProjectBucketConfigCmekSettings;

  // Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the --Log Analytics-- page using SQL queries. Cannot be disabled once enabled.
  public enableAnalytics?: boolean;

  // The bucket's lifecycle such as active or deleted. See [LifecycleState](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.buckets#LogBucket.LifecycleState).
  public lifecycleState?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  public retentionDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Describes this bucket.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the bucket.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "locked",
        "Whether the bucket is locked. The retention period on a locked bucket cannot be changed. Locked buckets may only be deleted if they are empty.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cmekSettings",
        "The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by updating the log bucket. Changing the KMS key is allowed. Structure is documented below.",
        () => logging_ProjectBucketConfigCmekSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "indexConfigs",
        "A list of indexed fields and related configuration data. Structure is documented below.",
        () => logging_ProjectBucketConfigIndexConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The parent resource that contains the logging bucket.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketId",
        "The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableAnalytics",
        "Whether or not Log Analytics is enabled. Logs for buckets with Log Analytics enabled can be queried in the **Log Analytics** page using SQL queries. Cannot be disabled once enabled.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionDays",
        "Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
