import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_InventoryDestinationBucket,
  s3_InventoryDestinationBucket_GetTypes,
} from './s3_InventoryDestinationBucket';

export interface s3_InventoryDestination {
  // S3 bucket configuration where inventory results are published (documented below).
  bucket?: s3_InventoryDestinationBucket;
}

export function s3_InventoryDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'bucket',
      'S3 bucket configuration where inventory results are published (documented below).',
      () => s3_InventoryDestinationBucket_GetTypes(),
      true,
      false,
    ),
  ];
}
