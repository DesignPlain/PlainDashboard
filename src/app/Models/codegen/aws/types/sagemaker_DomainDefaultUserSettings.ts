import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig,
  sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig';
import {
  sagemaker_DomainDefaultUserSettingsSharingSettings,
  sagemaker_DomainDefaultUserSettingsSharingSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsSharingSettings';
import {
  sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig,
  sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig';
import {
  sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings,
  sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings';
import {
  sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings,
  sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings';
import {
  sagemaker_DomainDefaultUserSettingsRSessionAppSettings,
  sagemaker_DomainDefaultUserSettingsRSessionAppSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsRSessionAppSettings';
import {
  sagemaker_DomainDefaultUserSettingsCanvasAppSettings,
  sagemaker_DomainDefaultUserSettingsCanvasAppSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsCanvasAppSettings';
import {
  sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings,
  sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings';
import {
  sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings,
  sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings';
import {
  sagemaker_DomainDefaultUserSettingsRStudioServerProAppSettings,
  sagemaker_DomainDefaultUserSettingsRStudioServerProAppSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsRStudioServerProAppSettings';
import {
  sagemaker_DomainDefaultUserSettingsSpaceStorageSettings,
  sagemaker_DomainDefaultUserSettingsSpaceStorageSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsSpaceStorageSettings';
import {
  sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings,
  sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings';

export interface sagemaker_DomainDefaultUserSettings {
  // A list of security group IDs that will be attached to the user.
  securityGroups?: Array<string>;

  // The sharing settings. See `sharing_settings` Block below.
  sharingSettings?: sagemaker_DomainDefaultUserSettingsSharingSettings;

  // The TensorBoard app settings. See `tensor_board_app_settings` Block below.
  tensorBoardAppSettings?: sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings;

  // A collection of settings that configure user interaction with the RStudioServerPro app. See `r_studio_server_pro_app_settings` Block below.
  rStudioServerProAppSettings?: sagemaker_DomainDefaultUserSettingsRStudioServerProAppSettings;

  // The storage settings for a private space. See `space_storage_settings` Block below.
  spaceStorageSettings?: sagemaker_DomainDefaultUserSettingsSpaceStorageSettings;

  // The Code Editor application settings. See `code_editor_app_settings` Block below.
  codeEditorAppSettings?: sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings;

  // Details about the POSIX identity that is used for file system operations. See `custom_posix_user_config` Block below.
  customPosixUserConfig?: sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig;

  // The settings for the JupyterLab application. See `jupyter_lab_app_settings` Block below.
  jupyterLabAppSettings?: sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings;

  // The Jupyter server's app settings. See `jupyter_server_app_settings` Block below.
  jupyterServerAppSettings?: sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings;

  // The RSession app settings. See `r_session_app_settings` Block below.
  rSessionAppSettings?: sagemaker_DomainDefaultUserSettingsRSessionAppSettings;

  // The Canvas app settings. See `canvas_app_settings` Block below.
  canvasAppSettings?: sagemaker_DomainDefaultUserSettingsCanvasAppSettings;

  // The settings for assigning a custom file system to a user profile. Permitted users can access this file system in Amazon SageMaker Studio. See `custom_file_system_config` Block below.
  customFileSystemConfigs?: Array<sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig>;

  // The execution role ARN for the user.
  executionRole?: string;

  // The default experience that the user is directed to when accessing the domain. The supported values are: `studio::`: Indicates that Studio is the default experience. This value can only be passed if StudioWebPortal is set to ENABLED. `app:JupyterServer:`: Indicates that Studio Classic is the default experience.
  defaultLandingUri?: string;

  // The kernel gateway app settings. See `kernel_gateway_app_settings` Block below.
  kernelGatewayAppSettings?: sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings;

  // Whether the user can access Studio. If this value is set to `DISABLED`, the user cannot access Studio, even if that is the default experience for the domain. Valid values are `ENABLED` and `DISABLED`.
  studioWebPortal?: string;
}

export function sagemaker_DomainDefaultUserSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'securityGroups',
      'A list of security group IDs that will be attached to the user.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'customFileSystemConfigs',
      'The settings for assigning a custom file system to a user profile. Permitted users can access this file system in Amazon SageMaker Studio. See `custom_file_system_config` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsCustomFileSystemConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customPosixUserConfig',
      'Details about the POSIX identity that is used for file system operations. See `custom_posix_user_config` Block below.',
      () => sagemaker_DomainDefaultUserSettingsCustomPosixUserConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'jupyterServerAppSettings',
      "The Jupyter server's app settings. See `jupyter_server_app_settings` Block below.",
      () =>
        sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'canvasAppSettings',
      'The Canvas app settings. See `canvas_app_settings` Block below.',
      () => sagemaker_DomainDefaultUserSettingsCanvasAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tensorBoardAppSettings',
      'The TensorBoard app settings. See `tensor_board_app_settings` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'rStudioServerProAppSettings',
      'A collection of settings that configure user interaction with the RStudioServerPro app. See `r_studio_server_pro_app_settings` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsRStudioServerProAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'executionRole',
      'The execution role ARN for the user.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'defaultLandingUri',
      'The default experience that the user is directed to when accessing the domain. The supported values are: `studio::`: Indicates that Studio is the default experience. This value can only be passed if StudioWebPortal is set to ENABLED. `app:JupyterServer:`: Indicates that Studio Classic is the default experience.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sharingSettings',
      'The sharing settings. See `sharing_settings` Block below.',
      () => sagemaker_DomainDefaultUserSettingsSharingSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'codeEditorAppSettings',
      'The Code Editor application settings. See `code_editor_app_settings` Block below.',
      () => sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'rSessionAppSettings',
      'The RSession app settings. See `r_session_app_settings` Block below.',
      () => sagemaker_DomainDefaultUserSettingsRSessionAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'kernelGatewayAppSettings',
      'The kernel gateway app settings. See `kernel_gateway_app_settings` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'studioWebPortal',
      'Whether the user can access Studio. If this value is set to `DISABLED`, the user cannot access Studio, even if that is the default experience for the domain. Valid values are `ENABLED` and `DISABLED`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'spaceStorageSettings',
      'The storage settings for a private space. See `space_storage_settings` Block below.',
      () => sagemaker_DomainDefaultUserSettingsSpaceStorageSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'jupyterLabAppSettings',
      'The settings for the JupyterLab application. See `jupyter_lab_app_settings` Block below.',
      () => sagemaker_DomainDefaultUserSettingsJupyterLabAppSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
