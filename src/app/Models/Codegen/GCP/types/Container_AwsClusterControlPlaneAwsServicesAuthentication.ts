import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsClusterControlPlaneAwsServicesAuthentication {
  // The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.
  RoleArn?: string;

  // Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.
  RoleSessionName?: string;
}

export function Container_AwsClusterControlPlaneAwsServicesAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RoleArn",
      "The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RoleSessionName",
      "Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.",
      [],
      false,
      false,
    ),
  ];
}
