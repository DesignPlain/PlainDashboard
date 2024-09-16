import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  storage_BucketAutoclass,
  storage_BucketAutoclass_GetTypes,
} from '../types/storage_BucketAutoclass';
import {
  storage_BucketVersioning,
  storage_BucketVersioning_GetTypes,
} from '../types/storage_BucketVersioning';
import {
  storage_BucketCustomPlacementConfig,
  storage_BucketCustomPlacementConfig_GetTypes,
} from '../types/storage_BucketCustomPlacementConfig';
import {
  storage_BucketLifecycleRule,
  storage_BucketLifecycleRule_GetTypes,
} from '../types/storage_BucketLifecycleRule';
import {
  storage_BucketWebsite,
  storage_BucketWebsite_GetTypes,
} from '../types/storage_BucketWebsite';
import {
  storage_BucketRetentionPolicy,
  storage_BucketRetentionPolicy_GetTypes,
} from '../types/storage_BucketRetentionPolicy';
import {
  storage_BucketEncryption,
  storage_BucketEncryption_GetTypes,
} from '../types/storage_BucketEncryption';
import {
  storage_BucketCor,
  storage_BucketCor_GetTypes,
} from '../types/storage_BucketCor';
import {
  storage_BucketLogging,
  storage_BucketLogging_GetTypes,
} from '../types/storage_BucketLogging';

export interface BucketArgs {
  // Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.
  enableObjectRetention?: boolean;

  // The bucket's encryption configuration. Structure is documented below.
  encryption?: storage_BucketEncryption;

  // A map of key/value label pairs to assign to the bucket.
  labels?: Map<string, string>;

  // The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  lifecycleRules?: Array<storage_BucketLifecycleRule>;

  // Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".
  publicAccessPrevention?: string;

  // Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.
  requesterPays?: boolean;

  // The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  cors?: Array<storage_BucketCor>;

  // Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
  defaultEventBasedHold?: boolean;

  // Configuration if the bucket acts as a website. Structure is documented below.
  website?: storage_BucketWebsite;

  // The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.
  logging?: storage_BucketLogging;

  // The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.
  storageClass?: string;

  // The name of the bucket.
  name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  // Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.
  retentionPolicy?: storage_BucketRetentionPolicy;

  // The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. --NOTE-- If used with single-region bucket, It will throw an error.
  rpo?: string;

  // The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.
  autoclass?: storage_BucketAutoclass;

  /*
The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).

- - -
*/
  location?: string;

  // Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.
  uniformBucketLevelAccess?: boolean;

  // The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.
  versioning?: storage_BucketVersioning;

  // The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.
  customPlacementConfig?: storage_BucketCustomPlacementConfig;

  /*
When deleting a bucket, this
boolean option will delete all contained objects. If you try to delete a
bucket that contains objects, the provider will fail that run.
*/
  forceDestroy?: boolean;
}
export class Bucket extends DS_Resource {
  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  // Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.
  public requesterPays?: boolean;

  // Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.
  public retentionPolicy?: storage_BucketRetentionPolicy;

  /*
The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).

- - -
*/
  public location?: string;

  // The base URL of the bucket, in the format `gs://<bucket-name>`.
  public url?: string;

  // Configuration if the bucket acts as a website. Structure is documented below.
  public website?: storage_BucketWebsite;

  // Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".
  public publicAccessPrevention?: string;

  // The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  public cors?: Array<storage_BucketCor>;

  // Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.
  public defaultEventBasedHold?: boolean;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public effectiveLabels?: Map<string, string>;

  // Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.
  public enableObjectRetention?: boolean;

  // The bucket's encryption configuration. Structure is documented below.
  public encryption?: storage_BucketEncryption;

  /*
When deleting a bucket, this
boolean option will delete all contained objects. If you try to delete a
bucket that contains objects, the provider will fail that run.
*/
  public forceDestroy?: boolean;

  // The name of the bucket.
  public name?: string;

  // The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.
  public autoclass?: storage_BucketAutoclass;

  // The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. --NOTE-- If used with single-region bucket, It will throw an error.
  public rpo?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // A map of key/value label pairs to assign to the bucket.
  public labels?: Map<string, string>;

  // The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.
  public lifecycleRules?: Array<storage_BucketLifecycleRule>;

  // The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.
  public logging?: storage_BucketLogging;

  // The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.
  public storageClass?: string;

  // Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.
  public uniformBucketLevelAccess?: boolean;

  // The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.
  public versioning?: storage_BucketVersioning;

  // The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.
  public customPlacementConfig?: storage_BucketCustomPlacementConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'enableObjectRetention',
        'Enables [object retention](https://cloud.google.com/storage/docs/object-lock) on a storage bucket.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'defaultEventBasedHold',
        'Whether or not to automatically apply an eventBasedHold to new objects added to the bucket.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the bucket.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoclass',
        "The bucket's [Autoclass](https://cloud.google.com/storage/docs/autoclass) configuration.  Structure is documented below.",
        () => storage_BucketAutoclass_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'customPlacementConfig',
        "The bucket's custom location configuration, which specifies the individual regions that comprise a dual-region bucket. If the bucket is designated a single or multi-region, the parameters are empty. Structure is documented below.",
        () => storage_BucketCustomPlacementConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'versioning',
        "The bucket's [Versioning](https://cloud.google.com/storage/docs/object-versioning) configuration.  Structure is documented below.",
        () => storage_BucketVersioning_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'forceDestroy',
        'When deleting a bucket, this\nboolean option will delete all contained objects. If you try to delete a\nbucket that contains objects, the provider will fail that run.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'A map of key/value label pairs to assign to the bucket.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'storageClass',
        'The [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of the new bucket. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'retentionPolicy',
        "Configuration of the bucket's data retention policy for how long objects in the bucket should be retained. Structure is documented below.",
        () => storage_BucketRetentionPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'rpo',
        'The recovery point objective for cross-region replication of the bucket. Applicable only for dual and multi-region buckets. `"DEFAULT"` sets default replication. `"ASYNC_TURBO"` value enables turbo replication, valid for dual-region buckets only. See [Turbo Replication](https://cloud.google.com/storage/docs/managing-turbo-replication) for more information. If rpo is not specified at bucket creation, it defaults to `"DEFAULT"` for dual and multi-region buckets. **NOTE** If used with single-region bucket, It will throw an error.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'lifecycleRules',
        "The bucket's [Lifecycle Rules](https://cloud.google.com/storage/docs/lifecycle#configuration) configuration. Multiple blocks of this type are permitted. Structure is documented below.",
        () => storage_BucketLifecycleRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'publicAccessPrevention',
        'Prevents public access to a bucket. Acceptable values are "inherited" or "enforced". If "inherited", the bucket uses [public access prevention](https://cloud.google.com/storage/docs/public-access-prevention). only if the bucket is subject to the public access prevention organization policy constraint. Defaults to "inherited".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'requesterPays',
        'Enables [Requester Pays](https://cloud.google.com/storage/docs/requester-pays) on a storage bucket.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The [GCS location](https://cloud.google.com/storage/docs/bucket-locations).\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'uniformBucketLevelAccess',
        'Enables [Uniform bucket-level access](https://cloud.google.com/storage/docs/uniform-bucket-level-access) access to a bucket.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'encryption',
        "The bucket's encryption configuration. Structure is documented below.",
        () => storage_BucketEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'cors',
        "The bucket's [Cross-Origin Resource Sharing (CORS)](https://www.w3.org/TR/cors/) configuration. Multiple blocks of this type are permitted. Structure is documented below.",
        () => storage_BucketCor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'website',
        'Configuration if the bucket acts as a website. Structure is documented below.',
        () => storage_BucketWebsite_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logging',
        "The bucket's [Access & Storage Logs](https://cloud.google.com/storage/docs/access-logs) configuration. Structure is documented below.",
        () => storage_BucketLogging_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
