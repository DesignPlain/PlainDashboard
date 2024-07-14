import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig {
  // The maximum number of concurrent invocations your serverless endpoint can process. Valid values are between `1` and `200`.
  maxConcurrency?: number;

  // The memory size of your serverless endpoint. Valid values are in 1 GB increments: `1024` MB, `2048` MB, `3072` MB, `4096` MB, `5120` MB, or `6144` MB.
  memorySizeInMb?: number;

  // The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to `max_concurrency`. Valid values are between `1` and `200`.
  provisionedConcurrency?: number;
}

export function sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrency",
      "The maximum number of concurrent invocations your serverless endpoint can process. Valid values are between `1` and `200`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memorySizeInMb",
      "The memory size of your serverless endpoint. Valid values are in 1 GB increments: `1024` MB, `2048` MB, `3072` MB, `4096` MB, `5120` MB, or `6144` MB.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "provisionedConcurrency",
      "The amount of provisioned concurrency to allocate for the serverless endpoint. Should be less than or equal to `max_concurrency`. Valid values are between `1` and `200`.",
      [],
      false,
      true,
    ),
  ];
}
