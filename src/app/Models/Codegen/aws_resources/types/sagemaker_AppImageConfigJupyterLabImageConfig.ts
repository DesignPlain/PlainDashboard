import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig,
  sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig_GetTypes,
} from "./sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig";

export interface sagemaker_AppImageConfigJupyterLabImageConfig {
  // The configuration used to run the application image container. See Container Config details below.
  containerConfig?: sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig;
}

export function sagemaker_AppImageConfigJupyterLabImageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "containerConfig",
      "The configuration used to run the application image container. See Container Config details below.",
      sagemaker_AppImageConfigJupyterLabImageConfigContainerConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
