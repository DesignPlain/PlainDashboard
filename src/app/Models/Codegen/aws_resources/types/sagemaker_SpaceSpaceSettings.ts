import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
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
  // The Jupyter server's app settings. See Jupyter Server App Settings below.
  jupyterServerAppSettings?: sagemaker_SpaceSpaceSettingsJupyterServerAppSettings;

  // The kernel gateway app settings. See Kernel Gateway App Settings below.
  kernelGatewayAppSettings?: sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings;

  //
  spaceStorageSettings?: sagemaker_SpaceSpaceSettingsSpaceStorageSettings;

  // The type of app created within the space.
  appType?: string;

  // The Code Editor application settings. See Code Editor App Settings below.
  codeEditorAppSettings?: sagemaker_SpaceSpaceSettingsCodeEditorAppSettings;

  // A file system, created by you, that you assign to a space for an Amazon SageMaker Domain. See Custom File System below.
  customFileSystems?: Array<sagemaker_SpaceSpaceSettingsCustomFileSystem>;

  // The settings for the JupyterLab application. See Jupyter Lab App Settings below.
  jupyterLabAppSettings?: sagemaker_SpaceSpaceSettingsJupyterLabAppSettings;
}

export function sagemaker_SpaceSpaceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "jupyterLabAppSettings",
      "The settings for the JupyterLab application. See Jupyter Lab App Settings below.",
      sagemaker_SpaceSpaceSettingsJupyterLabAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jupyterServerAppSettings",
      "The Jupyter server's app settings. See Jupyter Server App Settings below.",
      sagemaker_SpaceSpaceSettingsJupyterServerAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kernelGatewayAppSettings",
      "The kernel gateway app settings. See Kernel Gateway App Settings below.",
      sagemaker_SpaceSpaceSettingsKernelGatewayAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "spaceStorageSettings",
      "",
      sagemaker_SpaceSpaceSettingsSpaceStorageSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "appType",
      "The type of app created within the space.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "codeEditorAppSettings",
      "The Code Editor application settings. See Code Editor App Settings below.",
      sagemaker_SpaceSpaceSettingsCodeEditorAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customFileSystems",
      "A file system, created by you, that you assign to a space for an Amazon SageMaker Domain. See Custom File System below.",
      sagemaker_SpaceSpaceSettingsCustomFileSystem_GetTypes(),
      false,
      false,
    ),
  ];
}
