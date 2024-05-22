import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec,
  sagemaker_UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec";

export interface sagemaker_UserProfileUserSettingsTensorBoardAppSettings {
  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}

export function sagemaker_UserProfileUserSettingsTensorBoardAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      sagemaker_UserProfileUserSettingsTensorBoardAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
