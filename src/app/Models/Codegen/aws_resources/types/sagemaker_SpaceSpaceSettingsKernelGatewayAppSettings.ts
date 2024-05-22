import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage,
  sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage";
import {
  sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec,
  sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec";

export interface sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings {
  // A list of custom SageMaker images that are configured to run as a KernelGateway app. see Custom Image below.
  customImages?: Array<sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customImages",
      "A list of custom SageMaker images that are configured to run as a KernelGateway app. see Custom Image below.",
      sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      sagemaker_SpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes(),
      true,
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
