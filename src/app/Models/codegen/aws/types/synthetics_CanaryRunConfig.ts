import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface synthetics_CanaryRunConfig {
  // Whether this canary is to use active AWS X-Ray tracing when it runs. You can enable active tracing only for canaries that use version syn-nodejs-2.0 or later for their canary runtime.
  activeTracing?: boolean;

  // Map of environment variables that are accessible from the canary during execution. Please see [AWS Docs](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime) for variables reserved for Lambda.
  environmentVariables?: Map<string, string>;

  // Maximum amount of memory available to the canary while it is running, in MB. The value you specify must be a multiple of 64.
  memoryInMb?: number;

  // Number of seconds the canary is allowed to run before it must stop. If you omit this field, the frequency of the canary is used, up to a maximum of 840 (14 minutes).
  timeoutInSeconds?: number;
}

export function synthetics_CanaryRunConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "activeTracing",
      "Whether this canary is to use active AWS X-Ray tracing when it runs. You can enable active tracing only for canaries that use version syn-nodejs-2.0 or later for their canary runtime.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "environmentVariables",
      "Map of environment variables that are accessible from the canary during execution. Please see [AWS Docs](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime) for variables reserved for Lambda.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryInMb",
      "Maximum amount of memory available to the canary while it is running, in MB. The value you specify must be a multiple of 64.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutInSeconds",
      "Number of seconds the canary is allowed to run before it must stop. If you omit this field, the frequency of the canary is used, up to a maximum of 840 (14 minutes).",
      () => [],
      false,
      false,
    ),
  ];
}
