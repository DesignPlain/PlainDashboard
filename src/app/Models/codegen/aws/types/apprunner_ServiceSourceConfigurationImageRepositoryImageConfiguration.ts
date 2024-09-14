import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration {
  // Port that your application listens to in the container. Defaults to `"8080"`.
  port?: string;

  // Secrets and parameters available to your service as environment variables. A map of key/value pairs, where the key is the desired name of the Secret in the environment (i.e. it does not have to match the name of the secret in Secrets Manager or SSM Parameter Store), and the value is the ARN of the secret from AWS Secrets Manager or the ARN of the parameter in AWS SSM Parameter Store.
  runtimeEnvironmentSecrets?: Map<string, string>;

  // Environment variables available to your running App Runner service. A map of key/value pairs. Keys with a prefix of `AWSAPPRUNNER` are reserved for system use and aren't valid.
  runtimeEnvironmentVariables?: Map<string, string>;

  // Command App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start command.
  startCommand?: string;
}

export function apprunner_ServiceSourceConfigurationImageRepositoryImageConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "port",
      'Port that your application listens to in the container. Defaults to `"8080"`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "runtimeEnvironmentSecrets",
      "Secrets and parameters available to your service as environment variables. A map of key/value pairs, where the key is the desired name of the Secret in the environment (i.e. it does not have to match the name of the secret in Secrets Manager or SSM Parameter Store), and the value is the ARN of the secret from AWS Secrets Manager or the ARN of the parameter in AWS SSM Parameter Store.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "runtimeEnvironmentVariables",
      "Environment variables available to your running App Runner service. A map of key/value pairs. Keys with a prefix of `AWSAPPRUNNER` are reserved for system use and aren't valid.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startCommand",
      "Command App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start command.",
      () => [],
      false,
      false,
    ),
  ];
}
