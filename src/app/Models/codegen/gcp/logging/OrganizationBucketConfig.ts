import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  logging_OrganizationBucketConfigIndexConfig,
  logging_OrganizationBucketConfigIndexConfig_GetTypes,
} from "../types/logging_OrganizationBucketConfigIndexConfig";
import {
  logging_OrganizationBucketConfigCmekSettings,
  logging_OrganizationBucketConfigCmekSettings_GetTypes,
} from "../types/logging_OrganizationBucketConfigCmekSettings";

export interface OrganizationBucketConfigArgs {
  // A list of indexed fields and related configuration data. Structure is documented below.
  indexConfigs?: Array<logging_OrganizationBucketConfigIndexConfig>;

  // The location of the bucket. The supported locations are: "global" "us-central1"
  location?: string;

  // The parent resource that contains the logging bucket.
  organization?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  retentionDays?: number;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  bucketId?: string;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  cmekSettings?: logging_OrganizationBucketConfigCmekSettings;

  // Describes this bucket.
  description?: string;
}
export class OrganizationBucketConfig extends DS_Resource {
  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  public bucketId?: string;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  public cmekSettings?: logging_OrganizationBucketConfigCmekSettings;

  // The resource name of the bucket. For example: "organizations/my-organization-id/locations/my-location/buckets/my-bucket-id"
  public name?: string;

  // The parent resource that contains the logging bucket.
  public organization?: string;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  public retentionDays?: number;

  // Describes this bucket.
  public description?: string;

  // A list of indexed fields and related configuration data. Structure is documented below.
  public indexConfigs?: Array<logging_OrganizationBucketConfigIndexConfig>;

  // The bucket's lifecycle such as active or deleted. See [LifecycleState](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.buckets#LogBucket.LifecycleState).
  public lifecycleState?: string;

  // The location of the bucket. The supported locations are: "global" "us-central1"
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "cmekSettings",
        "The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK\nkey provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by\nupdating the log bucket. Changing the KMS key is allowed.",
        () => logging_OrganizationBucketConfigCmekSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Describes this bucket.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "indexConfigs",
        "A list of indexed fields and related configuration data. Structure is documented below.",
        () => logging_OrganizationBucketConfigIndexConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        'The location of the bucket. The supported locations are: "global" "us-central1"',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "organization",
        "The parent resource that contains the logging bucket.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionDays",
        "Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucketId",
        "The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
