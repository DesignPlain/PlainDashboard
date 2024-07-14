import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_EndpointConfigurationProductionVariant,
  sagemaker_EndpointConfigurationProductionVariant_GetTypes,
} from "../types/sagemaker_EndpointConfigurationProductionVariant";
import {
  sagemaker_EndpointConfigurationShadowProductionVariant,
  sagemaker_EndpointConfigurationShadowProductionVariant_GetTypes,
} from "../types/sagemaker_EndpointConfigurationShadowProductionVariant";
import {
  sagemaker_EndpointConfigurationAsyncInferenceConfig,
  sagemaker_EndpointConfigurationAsyncInferenceConfig_GetTypes,
} from "../types/sagemaker_EndpointConfigurationAsyncInferenceConfig";
import {
  sagemaker_EndpointConfigurationDataCaptureConfig,
  sagemaker_EndpointConfigurationDataCaptureConfig_GetTypes,
} from "../types/sagemaker_EndpointConfigurationDataCaptureConfig";

export interface EndpointConfigurationArgs {
  // Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
  kmsKeyArn?: string;

  // The name of the endpoint configuration. If omitted, this provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Creates a unique endpoint configuration name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // An list of ProductionVariant objects, one for each model that you want to host at this endpoint. Fields are documented below.
  productionVariants?: Array<sagemaker_EndpointConfigurationProductionVariant>;

  // Array of ProductionVariant objects. There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants. If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants. Fields are documented below.
  shadowProductionVariants?: Array<sagemaker_EndpointConfigurationShadowProductionVariant>;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies configuration for how an endpoint performs asynchronous inference.
  asyncInferenceConfig?: sagemaker_EndpointConfigurationAsyncInferenceConfig;

  // Specifies the parameters to capture input/output of SageMaker models endpoints. Fields are documented below.
  dataCaptureConfig?: sagemaker_EndpointConfigurationDataCaptureConfig;
}
export class EndpointConfiguration extends Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this endpoint configuration.
  public arn?: string;

  // The name of the endpoint configuration. If omitted, this provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // Creates a unique endpoint configuration name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies configuration for how an endpoint performs asynchronous inference.
  public asyncInferenceConfig?: sagemaker_EndpointConfigurationAsyncInferenceConfig;

  // Specifies the parameters to capture input/output of SageMaker models endpoints. Fields are documented below.
  public dataCaptureConfig?: sagemaker_EndpointConfigurationDataCaptureConfig;

  // Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
  public kmsKeyArn?: string;

  // An list of ProductionVariant objects, one for each model that you want to host at this endpoint. Fields are documented below.
  public productionVariants?: Array<sagemaker_EndpointConfigurationProductionVariant>;

  // Array of ProductionVariant objects. There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants. If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants. Fields are documented below.
  public shadowProductionVariants?: Array<sagemaker_EndpointConfigurationShadowProductionVariant>;

  // A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the endpoint configuration. If omitted, this provider will assign a random, unique name. Conflicts with `name_prefix`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique endpoint configuration name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "productionVariants",
        "An list of ProductionVariant objects, one for each model that you want to host at this endpoint. Fields are documented below.",
        sagemaker_EndpointConfigurationProductionVariant_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "shadowProductionVariants",
        "Array of ProductionVariant objects. There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on ProductionVariants. If you use this field, you can only specify one variant for ProductionVariants and one variant for ShadowProductionVariants. Fields are documented below.",
        sagemaker_EndpointConfigurationShadowProductionVariant_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A mapping of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "asyncInferenceConfig",
        "Specifies configuration for how an endpoint performs asynchronous inference.",
        sagemaker_EndpointConfigurationAsyncInferenceConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataCaptureConfig",
        "Specifies the parameters to capture input/output of SageMaker models endpoints. Fields are documented below.",
        sagemaker_EndpointConfigurationDataCaptureConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyArn",
        "Amazon Resource Name (ARN) of a AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.",
        [],
        false,
        true,
      ),
    ];
  }
}
