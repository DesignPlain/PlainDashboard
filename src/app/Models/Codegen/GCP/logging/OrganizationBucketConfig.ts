import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  logging_OrganizationBucketConfigCmekSettings,
  logging_OrganizationBucketConfigCmekSettings_GetTypes,
} from "../types/logging_OrganizationBucketConfigCmekSettings";
import {
  logging_OrganizationBucketConfigIndexConfig,
  logging_OrganizationBucketConfigIndexConfig_GetTypes,
} from "../types/logging_OrganizationBucketConfigIndexConfig";

export interface OrganizationBucketConfigArgs {
  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  cmekSettings?: logging_OrganizationBucketConfigCmekSettings;

  // Describes this bucket.
  description?: string;

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
}
export class OrganizationBucketConfig extends Resource {
  // The location of the bucket. The supported locations are: "global" "us-central1"
  public location?: string;

  // The resource name of the bucket. For example: "organizations/my-organization-id/locations/my-location/buckets/my-bucket-id"
  public name?: string;

  // The parent resource that contains the logging bucket.
  public organization?: string;

  // The name of the logging bucket. Logging automatically creates two log buckets: `_Required` and `_Default`.
  public bucketId?: string;

  // Describes this bucket.
  public description?: string;

  // A list of indexed fields and related configuration data. Structure is documented below.
  public indexConfigs?: Array<logging_OrganizationBucketConfigIndexConfig>;

  // The bucket's lifecycle such as active or deleted. See [LifecycleState](https://cloud.google.com/logging/docs/reference/v2/rest/v2/billingAccounts.buckets#LogBucket.LifecycleState).
  public lifecycleState?: string;

  /*
The CMEK settings of the log bucket. If present, new log entries written to this log bucket are encrypted using the CMEK
key provided in this configuration. If a log bucket has CMEK settings, the CMEK settings cannot be disabled later by
updating the log bucket. Changing the KMS key is allowed.
*/
  public cmekSettings?: logging_OrganizationBucketConfigCmekSettings;

  // Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. Bucket retention can not be increased on buckets outside of projects.
  public retentionDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "organization",
        "The parent resource that contains the logging bucket.",
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
        logging_OrganizationBucketConfigCmekSettings_GetTypes(),
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
      new DynamicUIProps(
        InputType.Array,
        "indexConfigs",
        "A list of indexed fields and related configuration data. Structure is documented below.",
        logging_OrganizationBucketConfigIndexConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        'The location of the bucket. The supported locations are: "global" "us-central1"',
        [],
        true,
        true,
      ),
    ];
  }
}
