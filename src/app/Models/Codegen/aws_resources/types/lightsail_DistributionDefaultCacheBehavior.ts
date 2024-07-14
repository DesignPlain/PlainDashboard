import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lightsail_DistributionDefaultCacheBehavior {
  // The cache behavior of the distribution. Valid values: `cache` and `dont-cache`.
  behavior?: string;
}

export function lightsail_DistributionDefaultCacheBehavior_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "behavior",
      "The cache behavior of the distribution. Valid values: `cache` and `dont-cache`.",
      [],
      true,
      false,
    ),
  ];
}
