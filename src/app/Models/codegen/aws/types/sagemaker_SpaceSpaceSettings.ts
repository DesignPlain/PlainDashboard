import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettings,
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettings_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsJupyterServerAppSettings";
import {
  sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings,
  sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings";
import {
  sagemaker_SpaceSpaceSettingsSpaceStorageSettings,
  sagemaker_SpaceSpaceSettingsSpaceStorageSettings_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsSpaceStorageSettings";
import {
  sagemaker_SpaceSpaceSettingsCodeEditorAppSettings,
  sagemaker_SpaceSpaceSettingsCodeEditorAppSettings_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsCodeEditorAppSettings";
import {
  sagemaker_SpaceSpaceSettingsCustomFileSystem,
  sagemaker_SpaceSpaceSettingsCustomFileSystem_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsCustomFileSystem";
import {
  sagemaker_SpaceSpaceSettingsJupyterLabAppSettings,
  sagemaker_SpaceSpaceSettingsJupyterLabAppSettings_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsJupyterLabAppSettings";

export interface sagemaker_SpaceSpaceSettings {
  // A file system, created by you, that you assign to a space for an Amazon SageMaker Domain. See `custom_file_system` Block below.
  customFileSystems?: Array<sagemaker_SpaceSpaceSettingsCustomFileSystem>;

  // The settings for the JupyterLab application. See `jupyter_lab_app_settings` Block below.
  jupyterLabAppSettings?: sagemaker_SpaceSpaceSettingsJupyterLabAppSettings;

  // The Jupyter server's app settings. See `jupyter_server_app_settings` Block below.
  jupyterServerAppSettings?: sagemaker_SpaceSpaceSettingsJupyterServerAppSettings;

  // The kernel gateway app settings. See `kernel_gateway_app_settings` Block below.
  kernelGatewayAppSettings?: sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings;

  // The storage settings. See `space_storage_settings` Block below.
  spaceStorageSettings?: sagemaker_SpaceSpaceSettingsSpaceStorageSettings;

  // The type of app created within the space.
  appType?: string;

  // The Code Editor application settings. See `code_editor_app_settings` Block below.
  codeEditorAppSettings?: sagemaker_SpaceSpaceSettingsCodeEditorAppSettings;
}

export function sagemaker_SpaceSpaceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customFileSystems",
      "A file system, created by you, that you assign to a space for an Amazon SageMaker Domain. See `custom_file_system` Block below.",
      () => sagemaker_SpaceSpaceSettingsCustomFileSystem_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jupyterLabAppSettings",
      "The settings for the JupyterLab application. See `jupyter_lab_app_settings` Block below.",
      () => sagemaker_SpaceSpaceSettingsJupyterLabAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jupyterServerAppSettings",
      "The Jupyter server's app settings. See `jupyter_server_app_settings` Block below.",
      () => sagemaker_SpaceSpaceSettingsJupyterServerAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kernelGatewayAppSettings",
      "The kernel gateway app settings. See `kernel_gateway_app_settings` Block below.",
      () => sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "spaceStorageSettings",
      "The storage settings. See `space_storage_settings` Block below.",
      () => sagemaker_SpaceSpaceSettingsSpaceStorageSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appType",
      "The type of app created within the space.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codeEditorAppSettings",
      "The Code Editor application settings. See `code_editor_app_settings` Block below.",
      () => sagemaker_SpaceSpaceSettingsCodeEditorAppSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
