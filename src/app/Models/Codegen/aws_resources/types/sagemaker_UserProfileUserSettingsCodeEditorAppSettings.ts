import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec,
  sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec";

export interface sagemaker_UserProfileUserSettingsCodeEditorAppSettings {
  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
}

export function sagemaker_UserProfileUserSettingsCodeEditorAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "lifecycleConfigArns",
      "The Amazon Resource Name (ARN) of the Lifecycle Configurations.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
