import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage,
  sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage';
import {
  sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec';

export interface sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings {
  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;

  // A list of custom SageMaker images that are configured to run as a CodeEditor app. see `custom_image` Block below.
  customImages?: Array<sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
}

export function sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'lifecycleConfigArns',
      'The Amazon Resource Name (ARN) of the Lifecycle Configurations.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'customImages',
      'A list of custom SageMaker images that are configured to run as a CodeEditor app. see `custom_image` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'defaultResourceSpec',
      'The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
