import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage,
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage_GetTypes,
} from "./sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage";
import {
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec,
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec";

export interface sagemaker_UserProfileUserSettingsKernelGatewayAppSettings {
  // A list of custom SageMaker images that are configured to run as a KernelGateway app. see Custom Image below.
  customImages?: Array<sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_UserProfileUserSettingsKernelGatewayAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customImages",
      "A list of custom SageMaker images that are configured to run as a KernelGateway app. see Custom Image below.",
      sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes(),
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
