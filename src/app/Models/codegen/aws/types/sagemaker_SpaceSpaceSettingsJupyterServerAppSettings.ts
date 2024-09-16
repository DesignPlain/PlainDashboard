import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository,
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository_GetTypes,
} from './sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository';
import {
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec,
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes,
} from './sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec';

export interface sagemaker_SpaceSpaceSettingsJupyterServerAppSettings {
  // A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. See `code_repository` Block below.
  codeRepositories?: Array<sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. See `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_SpaceSpaceSettingsJupyterServerAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'defaultResourceSpec',
      'The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. See `default_resource_spec` Block below.',
      () =>
        sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes(),
      true,
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
    new DynamicUIProps(
      InputType.Array,
      'codeRepositories',
      'A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. See `code_repository` Block below.',
      () =>
        sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository_GetTypes(),
      false,
      false,
    ),
  ];
}
