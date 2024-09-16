import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface storage_BucketWebsite {
  /*
Behaves as the bucket's directory index where
missing objects are treated as potential directories.
*/
  mainPageSuffix?: string;

  /*
The custom object to return when a requested
resource is not found.
*/
  notFoundPage?: string;
}

export function storage_BucketWebsite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mainPageSuffix',
      "Behaves as the bucket's directory index where\nmissing objects are treated as potential directories.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'notFoundPage',
      'The custom object to return when a requested\nresource is not found.',
      () => [],
      false,
      false,
    ),
  ];
}
