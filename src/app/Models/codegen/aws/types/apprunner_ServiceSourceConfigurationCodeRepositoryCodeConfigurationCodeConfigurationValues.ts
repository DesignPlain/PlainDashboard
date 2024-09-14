import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
  // Port that your application listens to in the container. Defaults to `"8080"`.
  port?: string;

  // Runtime environment type for building and running an App Runner service. Represents a programming language runtime. Valid values: `PYTHON_3`, `NODEJS_12`, `NODEJS_14`, `NODEJS_16`, `CORRETTO_8`, `CORRETTO_11`, `GO_1`, `DOTNET_6`, `PHP_81`, `RUBY_31`.
  runtime?: string;

  // Secrets and parameters available to your service as environment variables. A map of key/value pairs, where the key is the desired name of the Secret in the environment (i.e. it does not have to match the name of the secret in Secrets Manager or SSM Parameter Store), and the value is the ARN of the secret from AWS Secrets Manager or the ARN of the parameter in AWS SSM Parameter Store.
  runtimeEnvironmentSecrets?: Map<string, string>;

  // Environment variables available to your running App Runner service. A map of key/value pairs. Keys with a prefix of `AWSAPPRUNNER` are reserved for system use and aren't valid.
  runtimeEnvironmentVariables?: Map<string, string>;

  // Command App Runner runs to start your application.
  startCommand?: string;

  // Command App Runner runs to build your application.
  buildCommand?: string;
}

export function apprunner_ServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "buildCommand",
      "Command App Runner runs to build your application.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "port",
      'Port that your application listens to in the container. Defaults to `"8080"`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "runtime",
      "Runtime environment type for building and running an App Runner service. Represents a programming language runtime. Valid values: `PYTHON_3`, `NODEJS_12`, `NODEJS_14`, `NODEJS_16`, `CORRETTO_8`, `CORRETTO_11`, `GO_1`, `DOTNET_6`, `PHP_81`, `RUBY_31`.",
      () => [],
      true,
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
      "Command App Runner runs to start your application.",
      () => [],
      false,
      false,
    ),
  ];
}
