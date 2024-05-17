import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_BucketCor,
  Storage_BucketCor_GetTypes,
} from "../types/Storage_BucketCor";
import {
  Storage_BucketVersioning,
  Storage_BucketVersioning_GetTypes,
} from "../types/Storage_BucketVersioning";
import {
  Storage_BucketCustomPlacementConfig,
  Storage_BucketCustomPlacementConfig_GetTypes,
} from "../types/Storage_BucketCustomPlacementConfig";
import {
  Storage_BucketLifecycleRule,
  Storage_BucketLifecycleRule_GetTypes,
} from "../types/Storage_BucketLifecycleRule";
import {
  Storage_BucketWebsite,
  Storage_BucketWebsite_GetTypes,
} from "../types/Storage_BucketWebsite";
import {
  Storage_BucketEncryption,
  Storage_BucketEncryption_GetTypes,
} from "../types/Storage_BucketEncryption";
import {
  Storage_BucketLogging,
  Storage_BucketLogging_GetTypes,
} from "../types/Storage_BucketLogging";
import {
  Storage_BucketAutoclass,
  Storage_BucketAutoclass_GetTypes,
} from "../types/Storage_BucketAutoclass";
import {
  Storage_BucketRetentionPolicy,
  Storage_BucketRetentionPolicy_GetTypes,
} from "../types/Storage_BucketRetentionPolicy";

export interface BucketArgs {
  // The bucket's encryption configuration. Structure is documented below.
  Encryption?: Storage_BucketEncryption;

  // A map of key/value label pairs to assign to the bucket.
  Labels?: Map<string, string>;

  // The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.
  Logging?: Storage_BucketLogging;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  // The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. --NOTE-- If used with single-region bucket, It will throw an error.
  Rpo?: string;

  // Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.
  UniformBucketLevelAccess?: boolean;

  // The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.
  Autoclass?: Storage_BucketAutoclass;

  // The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  Cors?: Array<Storage_BucketCor>;

  // The name of the bucket.
  Name?: string;

  // Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".
  PublicAccessPrevention?: string;

  // Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.
  RetentionPolicy?: Storage_BucketRetentionPolicy;

  // The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.
  StorageClass?: string;

  // The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.
  CustomPlacementConfig?: Storage_BucketCustomPlacementConfig;

  // Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
  DefaultEventBasedHold?: boolean;

  /*
The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).

- - -
*/
  Location?: string;

  // Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.
  EnableObjectRetention?: boolean;

  /*
When deleting a bucket, this
boolean option will delete all contained objects. If you try to delete a
bucket that contains objects, the provider will fail that run.
*/
  ForceDestroy?: boolean;

  // The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  LifecycleRules?: Array<Storage_BucketLifecycleRule>;

  // Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.
  RequesterPays?: boolean;

  // The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.
  Versioning?: Storage_BucketVersioning;

  // Configuration if the bucket acts as a website. Structure is documented below.
  Website?: Storage_BucketWebsite;
}
export class Bucket extends Resource {
  // Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.
  public EnableObjectRetention?: boolean;

  // The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.
  public Logging?: Storage_BucketLogging;

  // The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. --NOTE-- If used with single-region bucket, It will throw an error.
  public Rpo?: string;

  // The base URL of the bucket, in the format `gs://<bucket-name>`.
  public Url?: string;

  // Configuration if the bucket acts as a website. Structure is documented below.
  public Website?: Storage_BucketWebsite;

  // Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
  public DefaultEventBasedHold?: boolean;

  // The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.
  public CustomPlacementConfig?: Storage_BucketCustomPlacementConfig;

  /*
When deleting a bucket, this
boolean option will delete all contained objects. If you try to delete a
bucket that contains objects, the provider will fail that run.
*/
  public ForceDestroy?: boolean;

  // A map of key/value label pairs to assign to the bucket.
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.
  public RetentionPolicy?: Storage_BucketRetentionPolicy;

  // Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.
  public UniformBucketLevelAccess?: boolean;

  // The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  public Cors?: Array<Storage_BucketCor>;

  // The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  public LifecycleRules?: Array<Storage_BucketLifecycleRule>;

  /*
The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).

- - -
*/
  public Location?: string;

  // Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".
  public PublicAccessPrevention?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  // The bucket's encryption configuration. Structure is documented below.
  public Encryption?: Storage_BucketEncryption;

  // The name of the bucket.
  public Name?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.
  public RequesterPays?: boolean;

  // The URI of the created resource.
  public SelfLink?: string;

  // The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.
  public StorageClass?: string;

  // The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.
  public Versioning?: Storage_BucketVersioning;

  // The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.
  public Autoclass?: Storage_BucketAutoclass;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Logging",
        "The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.",
        Storage_BucketLogging_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "UniformBucketLevelAccess",
        "Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Versioning",
        "The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.",
        Storage_BucketVersioning_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Website",
        "Configuration if the bucket acts as a website. Structure is documented below.",
        Storage_BucketWebsite_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Cors",
        "The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.",
        Storage_BucketCor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the bucket.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ForceDestroy",
        "When deleting a bucket, this\nboolean option will delete all contained objects. If you try to delete a\nbucket that contains objects, the provider will fail that run.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A map of key/value label pairs to assign to the bucket.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PublicAccessPrevention",
        'Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RetentionPolicy",
        "Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.",
        Storage_BucketRetentionPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "StorageClass",
        "The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableObjectRetention",
        "Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Encryption",
        "The bucket's encryption configuration. Structure is documented below.",
        Storage_BucketEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Rpo",
        'The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. **NOTE** If used with single-region bucket, It will throw an error.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Autoclass",
        "The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.",
        Storage_BucketAutoclass_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CustomPlacementConfig",
        "The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.",
        Storage_BucketCustomPlacementConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "DefaultEventBasedHold",
        "Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "LifecycleRules",
        "The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.",
        Storage_BucketLifecycleRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "RequesterPays",
        "Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.",
        [],
        false,
        false,
      ),
    ];
  }
}
