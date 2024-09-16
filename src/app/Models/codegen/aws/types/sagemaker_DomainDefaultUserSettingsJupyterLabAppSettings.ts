import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository,
  sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository';
import {
  sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage,
  sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage';
import {
  sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec';

export interface sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings {
  // A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see `code_repository` Block below.
  codeRepositories?: Array<sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository>;

  // A list of custom SageMaker images that are configured to run as a JupyterLab app. see `custom_image` Block below.
  customImages?: Array<sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'codeRepositories',
      'A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see `code_repository` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCodeRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'customImages',
      'A list of custom SageMaker images that are configured to run as a JupyterLab app. see `custom_image` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'defaultResourceSpec',
      'The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsJupyterLabAppSettingsDefaultResourceSpec_GetTypes(),
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
