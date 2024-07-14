import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig,
  cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig_GetTypes,
} from "./cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig";

export interface cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig {
  // Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to the staging distribution, while others are sent to the primary distribution. Define the session duration using TTL values. See `session_stickiness_config`.
  sessionStickinessConfig?: cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig;

  // The percentage of traffic to send to a staging distribution, expressed as a decimal number between `0` and `.15`.
  weight?: number;
}

export function cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sessionStickinessConfig",
      "Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to the staging distribution, while others are sent to the primary distribution. Define the session duration using TTL values. See `session_stickiness_config`.",
      cloudfront_ContinuousDeploymentPolicyTrafficConfigSingleWeightConfigSessionStickinessConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "The percentage of traffic to send to a staging distribution, expressed as a decimal number between `0` and `.15`.",
      [],
      true,
      false,
    ),
  ];
}
