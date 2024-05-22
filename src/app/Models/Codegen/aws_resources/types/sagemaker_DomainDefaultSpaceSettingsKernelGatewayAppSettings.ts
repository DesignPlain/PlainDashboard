import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage,
  sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage_GetTypes,
} from "./sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage";
import {
  sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec";

export interface sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings {
  // A list of custom SageMaker images that are configured to run as a KernelGateway app. see `custom_image` Block below.
  customImages?: Array<sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customImages",
      "A list of custom SageMaker images that are configured to run as a KernelGateway app. see `custom_image` Block below.",
      sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.",
      sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "lifecycleConfigArns",
      "The Amazon Resource Name (ARN) of the Lifecycle Configurations.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
