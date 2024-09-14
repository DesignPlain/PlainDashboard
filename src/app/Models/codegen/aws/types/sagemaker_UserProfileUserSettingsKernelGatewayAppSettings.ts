import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec,
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec";
import {
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage,
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage_GetTypes,
} from "./sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage";

export interface sagemaker_UserProfileUserSettingsKernelGatewayAppSettings {
  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;

  // A list of custom SageMaker images that are configured to run as a KernelGateway app. see Custom Image below.
  customImages?: Array<sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage>;
}

export function sagemaker_UserProfileUserSettingsKernelGatewayAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      () =>
        sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "lifecycleConfigArns",
      "The Amazon Resource Name (ARN) of the Lifecycle Configurations.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customImages",
      "A list of custom SageMaker images that are configured to run as a KernelGateway app. see Custom Image below.",
      () =>
        sagemaker_UserProfileUserSettingsKernelGatewayAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
  ];
}
