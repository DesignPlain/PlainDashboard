import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface finspace_KxClusterDatabaseCacheConfiguration {
  // Paths within the database to cache.
  dbPaths?: Array<string>;

  // Type of disk cache.
  cacheType?: string;
}

export function finspace_KxClusterDatabaseCacheConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dbPaths",
      "Paths within the database to cache.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cacheType",
      "Type of disk cache.",
      [],
      true,
      true,
    ),
  ];
}
