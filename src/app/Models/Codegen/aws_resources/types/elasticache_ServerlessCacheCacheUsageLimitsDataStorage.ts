import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticache_ServerlessCacheCacheUsageLimitsDataStorage {
  // The upper limit for data storage the cache is set to use. Set as Integer.
  maximum?: number;

  // The unit that the storage is measured in, in GB.
  unit?: string;
}

export function elasticache_ServerlessCacheCacheUsageLimitsDataStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximum",
      "The upper limit for data storage the cache is set to use. Set as Integer.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "The unit that the storage is measured in, in GB.",
      [],
      true,
      false,
    ),
  ];
}
