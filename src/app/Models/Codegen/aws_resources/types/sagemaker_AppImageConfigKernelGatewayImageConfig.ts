import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig,
  sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig_GetTypes,
} from "./sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig";
import {
  sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec,
  sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec_GetTypes,
} from "./sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec";

export interface sagemaker_AppImageConfigKernelGatewayImageConfig {
  // The URL where the Git repository is located. See File System Config details below.
  fileSystemConfig?: sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig;

  // The default branch for the Git repository. See Kernel Spec details below.
  kernelSpec?: sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec;
}

export function sagemaker_AppImageConfigKernelGatewayImageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "fileSystemConfig",
      "The URL where the Git repository is located. See File System Config details below.",
      sagemaker_AppImageConfigKernelGatewayImageConfigFileSystemConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kernelSpec",
      "The default branch for the Git repository. See Kernel Spec details below.",
      sagemaker_AppImageConfigKernelGatewayImageConfigKernelSpec_GetTypes(),
      true,
      false,
    ),
  ];
}
