import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_AwsClusterControlPlaneProxyConfig {
  // The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  secretVersion?: string;

  // The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  secretArn?: string;
}

export function container_AwsClusterControlPlaneProxyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretVersion",
      "The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretArn",
      "The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.",
      [],
      true,
      false,
    ),
  ];
}
