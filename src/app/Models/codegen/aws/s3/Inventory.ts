import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_InventorySchedule,
  s3_InventorySchedule_GetTypes,
} from '../types/s3_InventorySchedule';
import {
  s3_InventoryDestination,
  s3_InventoryDestination_GetTypes,
} from '../types/s3_InventoryDestination';
import {
  s3_InventoryFilter,
  s3_InventoryFilter_GetTypes,
} from '../types/s3_InventoryFilter';

export interface InventoryArgs {
  // Object versions to include in the inventory list. Valid values: `All`, `Current`.
  includedObjectVersions?: string;

  // Unique identifier of the inventory configuration for the bucket.
  name?: string;

  // List of optional fields that are included in the inventory results. Please refer to the S3 [documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_InventoryConfiguration.html#AmazonS3-Type-InventoryConfiguration-OptionalFields) for more details.
  optionalFields?: Array<string>;

  // Specifies the schedule for generating inventory results (documented below).
  schedule?: s3_InventorySchedule;

  // Name of the source bucket that inventory lists the objects for.
  bucket?: string;

  // Contains information about where to publish the inventory results (documented below).
  destination?: s3_InventoryDestination;

  // Specifies whether the inventory is enabled or disabled.
  enabled?: boolean;

  // Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
  filter?: s3_InventoryFilter;
}
export class Inventory extends DS_Resource {
  // Name of the source bucket that inventory lists the objects for.
  public bucket?: string;

  // Contains information about where to publish the inventory results (documented below).
  public destination?: s3_InventoryDestination;

  // Specifies whether the inventory is enabled or disabled.
  public enabled?: boolean;

  // Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).
  public filter?: s3_InventoryFilter;

  // Object versions to include in the inventory list. Valid values: `All`, `Current`.
  public includedObjectVersions?: string;

  // Unique identifier of the inventory configuration for the bucket.
  public name?: string;

  // List of optional fields that are included in the inventory results. Please refer to the S3 [documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_InventoryConfiguration.html#AmazonS3-Type-InventoryConfiguration-OptionalFields) for more details.
  public optionalFields?: Array<string>;

  // Specifies the schedule for generating inventory results (documented below).
  public schedule?: s3_InventorySchedule;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'filter',
        "Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria (documented below).",
        () => s3_InventoryFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'includedObjectVersions',
        'Object versions to include in the inventory list. Valid values: `All`, `Current`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique identifier of the inventory configuration for the bucket.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'optionalFields',
        'List of optional fields that are included in the inventory results. Please refer to the S3 [documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_InventoryConfiguration.html#AmazonS3-Type-InventoryConfiguration-OptionalFields) for more details.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'schedule',
        'Specifies the schedule for generating inventory results (documented below).',
        () => s3_InventorySchedule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'Name of the source bucket that inventory lists the objects for.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'destination',
        'Contains information about where to publish the inventory results (documented below).',
        () => s3_InventoryDestination_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'Specifies whether the inventory is enabled or disabled.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
