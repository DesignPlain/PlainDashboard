import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig,
  appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig_GetTypes,
} from "./appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig";

export interface appsync_DataSourceHttpConfigAuthorizationConfig {
  // Authorization type that the HTTP endpoint requires. Default values is `AWS_IAM`.
  authorizationType?: string;

  // Identity and Access Management (IAM) settings. See AWS IAM Config.
  awsIamConfig?: appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig;
}

export function appsync_DataSourceHttpConfigAuthorizationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authorizationType",
      "Authorization type that the HTTP endpoint requires. Default values is `AWS_IAM`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "awsIamConfig",
      "Identity and Access Management (IAM) settings. See AWS IAM Config.",
      appsync_DataSourceHttpConfigAuthorizationConfigAwsIamConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
