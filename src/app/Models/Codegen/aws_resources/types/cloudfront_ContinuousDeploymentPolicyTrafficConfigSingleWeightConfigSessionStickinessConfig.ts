import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig {
  // The amount of time in seconds after which sessions will cease if no requests are received. Valid values are `300` – `3600` (5–60 minutes). The value must be less than or equal to `maximum_ttl`.
  idleTtl?: number;

  // The maximum amount of time in seconds to consider requests from the viewer as being part of the same session. Valid values are `300` – `3600` (5–60 minutes). The value must be greater than or equal to `idle_ttl`.
  maximumTtl?: number;
}

export function cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "idleTtl",
      "The amount of time in seconds after which sessions will cease if no requests are received. Valid values are `300` – `3600` (5–60 minutes). The value must be less than or equal to `maximum_ttl`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumTtl",
      "The maximum amount of time in seconds to consider requests from the viewer as being part of the same session. Valid values are `300` – `3600` (5–60 minutes). The value must be greater than or equal to `idle_ttl`.",
      [],
      true,
      false,
    ),
  ];
}
