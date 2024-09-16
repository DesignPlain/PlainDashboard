import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface finspace_KxClusterDatabaseCacheConfiguration {
  // Type of disk cache.
  cacheType?: string;

  // Paths within the database to cache.
  dbPaths?: Array<string>;
}

export function finspace_KxClusterDatabaseCacheConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cacheType',
      'Type of disk cache.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'dbPaths',
      'Paths within the database to cache.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
