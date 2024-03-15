import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BucketVersioning } from "../types/BucketVersioning";
import { BucketCustomPlacementConfig } from "../types/BucketCustomPlacementConfig";
import { BucketWebsite } from "../types/BucketWebsite";
import { BucketEncryption } from "../types/BucketEncryption";
import { BucketLogging } from "../types/BucketLogging";
import { BucketRetentionPolicy } from "../types/BucketRetentionPolicy";
import { BucketLifecycleRule } from "../types/BucketLifecycleRule";
import { BucketAutoclass } from "../types/BucketAutoclass";
import { BucketCor } from "../types/BucketCor";

export interface BucketArgs {
  // Configuration if the bucket acts as a website. Structure is documented below.
  Website?: BucketWebsite;

  // Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
  DefaultEventBasedHold?: boolean;

  /*
When deleting a bucket, this
boolean option will delete all contained objects. If you try to delete a
bucket that contains objects, the provider will fail that run.
*/
  ForceDestroy?: boolean;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  // The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.
  Versioning?: BucketVersioning;

  // The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  Cors?: Array<BucketCor>;

  // The name of the bucket.
  Name?: string;

  // Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".
  PublicAccessPrevention?: string;

  // Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.
  UniformBucketLevelAccess?: boolean;

  // The bucket's encryption configuration. Structure is documented below.
  Encryption?: BucketEncryption;

  // The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.
  Logging?: BucketLogging;

  // Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.
  RetentionPolicy?: BucketRetentionPolicy;

  // The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. --NOTE-- If used with single-region bucket, It will throw an error.
  Rpo?: string;

  // The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  LifecycleRules?: Array<BucketLifecycleRule>;

  /*
The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).

- - -
*/
  Location?: string;

  // Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.
  RequesterPays?: boolean;

  // The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.
  StorageClass?: string;

  // The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.
  Autoclass?: BucketAutoclass;

  // The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.
  CustomPlacementConfig?: BucketCustomPlacementConfig;

  // Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.
  EnableObjectRetention?: boolean;

  // A map of key/value label pairs to assign to the bucket.
  Labels?: Map<string, string>;
}
export class Bucket extends Resource {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  // Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.
  public UniformBucketLevelAccess?: boolean;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  // Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
  public DefaultEventBasedHold?: boolean;

  // A map of key/value label pairs to assign to the bucket.
  public Labels?: Map<string, string>;

  /*
The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).

- - -
*/
  public Location?: string;

  // The name of the bucket.
  public Name?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. --NOTE-- If used with single-region bucket, It will throw an error.
  public Rpo?: string;

  // The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.
  public Versioning?: BucketVersioning;

  // The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  public Cors?: Array<BucketCor>;

  // The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.
  public CustomPlacementConfig?: BucketCustomPlacementConfig;

  // Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.
  public EnableObjectRetention?: boolean;

  // The bucket's encryption configuration. Structure is documented below.
  public Encryption?: BucketEncryption;

  /*
When deleting a bucket, this
boolean option will delete all contained objects. If you try to delete a
bucket that contains objects, the provider will fail that run.
*/
  public ForceDestroy?: boolean;

  // The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.
  public Logging?: BucketLogging;

  // Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.
  public RequesterPays?: boolean;

  // The base URL of the bucket, in the format `gs://<bucket-name>`.
  public Url?: string;

  // The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.
  public Autoclass?: BucketAutoclass;

  // Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".
  public PublicAccessPrevention?: string;

  // Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.
  public RetentionPolicy?: BucketRetentionPolicy;

  // The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.
  public StorageClass?: string;

  // Configuration if the bucket acts as a website. Structure is documented below.
  public Website?: BucketWebsite;

  // The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  public LifecycleRules?: Array<BucketLifecycleRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "RetentionPolicy",
        "Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "RequesterPays",
        "Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ForceDestroy",
        "When deleting a bucket, this\nboolean option will delete all contained objects. If you try to delete a\nbucket that contains objects, the provider will fail that run.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PublicAccessPrevention",
        'Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".',
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "UniformBucketLevelAccess",
        "Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Encryption",
        "The bucket's encryption configuration. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Logging",
        "The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A map of key/value label pairs to assign to the bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Website",
        "Configuration if the bucket acts as a website. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Rpo",
        'The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. **NOTE** If used with single-region bucket, It will throw an error.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Autoclass",
        "The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DefaultEventBasedHold",
        "Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Versioning",
        "The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Cors",
        "The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Name", "The name of the bucket."),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomPlacementConfig",
        "The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "LifecycleRules",
        "The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StorageClass",
        "The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableObjectRetention",
        "Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.",
      ),
    ];
  }
}
