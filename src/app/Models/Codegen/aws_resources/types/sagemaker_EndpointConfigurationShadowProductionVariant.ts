import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_EndpointConfigurationShadowProductionVariantRoutingConfig,
  sagemaker_EndpointConfigurationShadowProductionVariantRoutingConfig_GetTypes,
} from "./sagemaker_EndpointConfigurationShadowProductionVariantRoutingConfig";
import {
  sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig,
  sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig_GetTypes,
} from "./sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig";
import {
  sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig,
  sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig_GetTypes,
} from "./sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig";

export interface sagemaker_EndpointConfigurationShadowProductionVariant {
  // The type of instance to start.
  instanceType?: string;

  // Sets how the endpoint routes incoming traffic. See routing_config below.
  routingConfigs?: Array<sagemaker_EndpointConfigurationShadowProductionVariantRoutingConfig>;

  // You can use this parameter to turn on native Amazon Web Services Systems Manager (SSM) access for a production variant behind an endpoint. By default, SSM access is disabled for all production variants behind an endpoints.
  enableSsmAccess?: boolean;

  // Initial number of instances used for auto-scaling.
  initialInstanceCount?: number;

  // Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. If unspecified, it defaults to `1.0`.
  initialVariantWeight?: number;

  // The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant. Valid values between `60` and `3600`.
  modelDataDownloadTimeoutInSeconds?: number;

  // The name of the model to use.
  modelName?: string;

  // Specifies configuration for how an endpoint performs asynchronous inference.
  serverlessConfig?: sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig;

  // The name of the variant. If omitted, this provider will assign a random, unique name.
  variantName?: string;

  // The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. Valid values between `1` and `512`.
  volumeSizeInGb?: number;

  // The size of the Elastic Inference (EI) instance to use for the production variant.
  acceleratorType?: string;

  // The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting. For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests). Valid values between `60` and `3600`.
  containerStartupHealthCheckTimeoutInSeconds?: number;

  // Specifies configuration for a core dump from the model container when the process crashes. Fields are documented below.
  coreDumpConfig?: sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig;
}

export function sagemaker_EndpointConfigurationShadowProductionVariant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "initialInstanceCount",
      "Initial number of instances used for auto-scaling.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "modelName",
      "The name of the model to use.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "coreDumpConfig",
      "Specifies configuration for a core dump from the model container when the process crashes. Fields are documented below.",
      sagemaker_EndpointConfigurationShadowProductionVariantCoreDumpConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "The type of instance to start.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableSsmAccess",
      "You can use this parameter to turn on native Amazon Web Services Systems Manager (SSM) access for a production variant behind an endpoint. By default, SSM access is disabled for all production variants behind an endpoints.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "modelDataDownloadTimeoutInSeconds",
      "The timeout value, in seconds, to download and extract the model that you want to host from Amazon S3 to the individual inference instance associated with this production variant. Valid values between `60` and `3600`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serverlessConfig",
      "Specifies configuration for how an endpoint performs asynchronous inference.",
      sagemaker_EndpointConfigurationShadowProductionVariantServerlessConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "variantName",
      "The name of the variant. If omitted, this provider will assign a random, unique name.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSizeInGb",
      "The size, in GB, of the ML storage volume attached to individual inference instance associated with the production variant. Valid values between `1` and `512`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "acceleratorType",
      "The size of the Elastic Inference (EI) instance to use for the production variant.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "containerStartupHealthCheckTimeoutInSeconds",
      "The timeout value, in seconds, for your inference container to pass health check by SageMaker Hosting. For more information about health check, see [How Your Container Should Respond to Health Check (Ping) Requests](https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms-inference-code.html#your-algorithms-inference-algo-ping-requests). Valid values between `60` and `3600`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "routingConfigs",
      "Sets how the endpoint routes incoming traffic. See routing_config below.",
      sagemaker_EndpointConfigurationShadowProductionVariantRoutingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "initialVariantWeight",
      "Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. If unspecified, it defaults to `1.0`.",
      [],
      false,
      true,
    ),
  ];
}
