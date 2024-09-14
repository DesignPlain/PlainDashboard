import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticache_ServerlessCacheCacheUsageLimitsDataStorage {
  //
  maximum?: number;

  //
  minimum?: number;

  // The unit that the storage is measured in, in GB.
  unit?: string;
}

export function elasticache_ServerlessCacheCacheUsageLimitsDataStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "maximum", "", () => [], false, false),
    new DynamicUIProps(InputType.Number, "minimum", "", () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      "unit",
      "The unit that the storage is measured in, in GB.",
      () => [],
      true,
      false,
    ),
  ];
}
