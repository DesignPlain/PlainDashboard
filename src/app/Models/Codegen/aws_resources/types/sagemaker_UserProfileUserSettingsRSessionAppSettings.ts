import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec,
  sagemaker_UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec";
import {
  sagemaker_UserProfileUserSettingsRSessionAppSettingsCustomImage,
  sagemaker_UserProfileUserSettingsRSessionAppSettingsCustomImage_GetTypes,
} from "./sagemaker_UserProfileUserSettingsRSessionAppSettingsCustomImage";

export interface sagemaker_UserProfileUserSettingsRSessionAppSettings {
  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec;

  // A list of custom SageMaker images that are configured to run as a KernelGateway app. see Custom Image below.
  customImages?: Array<sagemaker_UserProfileUserSettingsRSessionAppSettingsCustomImage>;
}

export function sagemaker_UserProfileUserSettingsRSessionAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      sagemaker_UserProfileUserSettingsRSessionAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customImages",
      "A list of custom SageMaker images that are configured to run as a KernelGateway app. see Custom Image below.",
      sagemaker_UserProfileUserSettingsRSessionAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
  ];
}
