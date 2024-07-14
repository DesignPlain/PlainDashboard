import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings,
  sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings_GetTypes,
} from "./sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings";
import {
  sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings,
  sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings_GetTypes,
} from "./sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings";

export interface sagemaker_DomainDefaultSpaceSettings {
  // The Jupyter server's app settings. See `jupyter_server_app_settings` Block below.
  jupyterServerAppSettings?: sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings;

  // The kernel gateway app settings. See `kernel_gateway_app_settings` Block below.
  kernelGatewayAppSettings?: sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings;

  // The security groups for the Amazon Virtual Private Cloud that the space uses for communication.
  securityGroups?: Array<string>;

  // The execution role for the space.
  executionRole?: string;
}

export function sagemaker_DomainDefaultSpaceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kernelGatewayAppSettings",
      "The kernel gateway app settings. See `kernel_gateway_app_settings` Block below.",
      sagemaker_DomainDefaultSpaceSettingsKernelGatewayAppSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroups",
      "The security groups for the Amazon Virtual Private Cloud that the space uses for communication.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionRole",
      "The execution role for the space.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "jupyterServerAppSettings",
      "The Jupyter server's app settings. See `jupyter_server_app_settings` Block below.",
      sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
