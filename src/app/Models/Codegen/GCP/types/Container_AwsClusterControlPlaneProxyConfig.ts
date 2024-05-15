import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsClusterControlPlaneProxyConfig {
  // The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  SecretArn?: string;

  // The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  SecretVersion?: string;
}

export function Container_AwsClusterControlPlaneProxyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SecretArn",
      "The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SecretVersion",
      "The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.",
      [],
      true,
      false,
    ),
  ];
}
