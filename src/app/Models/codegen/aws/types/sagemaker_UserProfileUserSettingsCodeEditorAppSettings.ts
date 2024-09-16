import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_UserProfileUserSettingsCodeEditorAppSettingsCustomImage,
  sagemaker_UserProfileUserSettingsCodeEditorAppSettingsCustomImage_GetTypes,
} from './sagemaker_UserProfileUserSettingsCodeEditorAppSettingsCustomImage';
import {
  sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec,
  sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes,
} from './sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec';

export interface sagemaker_UserProfileUserSettingsCodeEditorAppSettings {
  // A list of custom SageMaker images that are configured to run as a CodeEditor app. see Custom Image below.
  customImages?: Array<sagemaker_UserProfileUserSettingsCodeEditorAppSettingsCustomImage>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_UserProfileUserSettingsCodeEditorAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'customImages',
      'A list of custom SageMaker images that are configured to run as a CodeEditor app. see Custom Image below.',
      () =>
        sagemaker_UserProfileUserSettingsCodeEditorAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'defaultResourceSpec',
      'The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.',
      () =>
        sagemaker_UserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'lifecycleConfigArns',
      'The Amazon Resource Name (ARN) of the Lifecycle Configurations.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
