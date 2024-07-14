import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettings,
  sagemaker_UserProfileUserSettingsKernelGatewayAppSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsKernelGatewayAppSettings";
import {
  sagemaker_UserProfileUserSettingsSharingSettings,
  sagemaker_UserProfileUserSettingsSharingSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsSharingSettings";
import {
  sagemaker_UserProfileUserSettingsSpaceStorageSettings,
  sagemaker_UserProfileUserSettingsSpaceStorageSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsSpaceStorageSettings";
import {
  sagemaker_UserProfileUserSettingsCodeEditorAppSettings,
  sagemaker_UserProfileUserSettingsCodeEditorAppSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsCodeEditorAppSettings";
import {
  sagemaker_UserProfileUserSettingsJupyterServerAppSettings,
  sagemaker_UserProfileUserSettingsJupyterServerAppSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsJupyterServerAppSettings";
import {
  sagemaker_UserProfileUserSettingsCustomPosixUserConfig,
  sagemaker_UserProfileUserSettingsCustomPosixUserConfig_GetTypes,
} from "./sagemaker_UserProfileUserSettingsCustomPosixUserConfig";
import {
  sagemaker_UserProfileUserSettingsRSessionAppSettings,
  sagemaker_UserProfileUserSettingsRSessionAppSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsRSessionAppSettings";
import {
  sagemaker_UserProfileUserSettingsRStudioServerProAppSettings,
  sagemaker_UserProfileUserSettingsRStudioServerProAppSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsRStudioServerProAppSettings";
import {
  sagemaker_UserProfileUserSettingsTensorBoardAppSettings,
  sagemaker_UserProfileUserSettingsTensorBoardAppSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsTensorBoardAppSettings";
import {
  sagemaker_UserProfileUserSettingsCanvasAppSettings,
  sagemaker_UserProfileUserSettingsCanvasAppSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsCanvasAppSettings";
import {
  sagemaker_UserProfileUserSettingsCustomFileSystemConfig,
  sagemaker_UserProfileUserSettingsCustomFileSystemConfig_GetTypes,
} from "./sagemaker_UserProfileUserSettingsCustomFileSystemConfig";
import {
  sagemaker_UserProfileUserSettingsJupyterLabAppSettings,
  sagemaker_UserProfileUserSettingsJupyterLabAppSettings_GetTypes,
} from "./sagemaker_UserProfileUserSettingsJupyterLabAppSettings";

export interface sagemaker_UserProfileUserSettings {
  // The Canvas app settings. See Canvas App Settings below.
  canvasAppSettings?: sagemaker_UserProfileUserSettingsCanvasAppSettings;

  // The Code Editor application settings. See Code Editor App Settings below.
  codeEditorAppSettings?: sagemaker_UserProfileUserSettingsCodeEditorAppSettings;

  // The settings for assigning a custom file system to a user profile. Permitted users can access this file system in Amazon SageMaker Studio. See Custom File System Config below.
  customFileSystemConfigs?: Array<sagemaker_UserProfileUserSettingsCustomFileSystemConfig>;

  // The execution role ARN for the user.
  executionRole?: string;

  // The Jupyter server's app settings. See Jupyter Server App Settings below.
  jupyterServerAppSettings?: sagemaker_UserProfileUserSettingsJupyterServerAppSettings;

  // Whether the user can access Studio. If this value is set to `DISABLED`, the user cannot access Studio, even if that is the default experience for the domain. Valid values are `ENABLED` and `DISABLED`.
  studioWebPortal?: string;

  // Details about the POSIX identity that is used for file system operations. See Custom Posix User Config below.
  customPosixUserConfig?: sagemaker_UserProfileUserSettingsCustomPosixUserConfig;

  // The settings for the JupyterLab application. See Jupyter Lab App Settings below.
  jupyterLabAppSettings?: sagemaker_UserProfileUserSettingsJupyterLabAppSettings;

  // A list of security group IDs that will be attached to the user.
  securityGroups?: Array<string>;

  // The default experience that the user is directed to when accessing the domain. The supported values are: `studio::`: Indicates that Studio is the default experience. This value can only be passed if StudioWebPortal is set to ENABLED. `app:JupyterServer:`: Indicates that Studio Classic is the default experience.
  defaultLandingUri?: string;

  // The kernel gateway app settings. See Kernel Gateway App Settings below.
  kernelGatewayAppSettings?: sagemaker_UserProfileUserSettingsKernelGatewayAppSettings;

  // The RSession app settings. See RSession App Settings below.
  rSessionAppSettings?: sagemaker_UserProfileUserSettingsRSessionAppSettings;

  // A collection of settings that configure user interaction with the RStudioServerPro app. See RStudioServerProAppSettings below.
  rStudioServerProAppSettings?: sagemaker_UserProfileUserSettingsRStudioServerProAppSettings;

  // The sharing settings. See Sharing Settings below.
  sharingSettings?: sagemaker_UserProfileUserSettingsSharingSettings;

  // The storage settings for a private space. See Space Storage Settings below.
  spaceStorageSettings?: sagemaker_UserProfileUserSettingsSpaceStorageSettings;

  // The TensorBoard app settings. See TensorBoard App Settings below.
  tensorBoardAppSettings?: sagemaker_UserProfileUserSettingsTensorBoardAppSettings;
}

export function sagemaker_UserProfileUserSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "A list of security group IDs that will be attached to the user.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rSessionAppSettings",
      "The RSession app settings. See RSession App Settings below.",
      sagemaker_UserProfileUserSettingsRSessionAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "canvasAppSettings",
      "The Canvas app settings. See Canvas App Settings below.",
      sagemaker_UserProfileUserSettingsCanvasAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customFileSystemConfigs",
      "The settings for assigning a custom file system to a user profile. Permitted users can access this file system in Amazon SageMaker Studio. See Custom File System Config below.",
      sagemaker_UserProfileUserSettingsCustomFileSystemConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionRole",
      "The execution role ARN for the user.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultLandingUri",
      "The default experience that the user is directed to when accessing the domain. The supported values are: `studio::`: Indicates that Studio is the default experience. This value can only be passed if StudioWebPortal is set to ENABLED. `app:JupyterServer:`: Indicates that Studio Classic is the default experience.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rStudioServerProAppSettings",
      "A collection of settings that configure user interaction with the RStudioServerPro app. See RStudioServerProAppSettings below.",
      sagemaker_UserProfileUserSettingsRStudioServerProAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "spaceStorageSettings",
      "The storage settings for a private space. See Space Storage Settings below.",
      sagemaker_UserProfileUserSettingsSpaceStorageSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codeEditorAppSettings",
      "The Code Editor application settings. See Code Editor App Settings below.",
      sagemaker_UserProfileUserSettingsCodeEditorAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "studioWebPortal",
      "Whether the user can access Studio. If this value is set to `DISABLED`, the user cannot access Studio, even if that is the default experience for the domain. Valid values are `ENABLED` and `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kernelGatewayAppSettings",
      "The kernel gateway app settings. See Kernel Gateway App Settings below.",
      sagemaker_UserProfileUserSettingsKernelGatewayAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jupyterServerAppSettings",
      "The Jupyter server's app settings. See Jupyter Server App Settings below.",
      sagemaker_UserProfileUserSettingsJupyterServerAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customPosixUserConfig",
      "Details about the POSIX identity that is used for file system operations. See Custom Posix User Config below.",
      sagemaker_UserProfileUserSettingsCustomPosixUserConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jupyterLabAppSettings",
      "The settings for the JupyterLab application. See Jupyter Lab App Settings below.",
      sagemaker_UserProfileUserSettingsJupyterLabAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sharingSettings",
      "The sharing settings. See Sharing Settings below.",
      sagemaker_UserProfileUserSettingsSharingSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tensorBoardAppSettings",
      "The TensorBoard app settings. See TensorBoard App Settings below.",
      sagemaker_UserProfileUserSettingsTensorBoardAppSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
