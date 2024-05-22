import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig,
  sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig_GetTypes,
} from "./sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig";

export interface sagemaker_DataQualityJobDefinitionJobResources {
  // The configuration for the cluster resources used to run the processing job. Fields are documented below.
  clusterConfig?: sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig;
}

export function sagemaker_DataQualityJobDefinitionJobResources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "clusterConfig",
      "The configuration for the cluster resources used to run the processing job. Fields are documented below.",
      sagemaker_DataQualityJobDefinitionJobResourcesClusterConfig_GetTypes(),
      true,
      true,
    ),
  ];
}
