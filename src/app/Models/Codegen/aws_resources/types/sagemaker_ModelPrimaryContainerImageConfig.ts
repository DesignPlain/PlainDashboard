import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_ModelPrimaryContainerImageConfigRepositoryAuthConfig,
  sagemaker_ModelPrimaryContainerImageConfigRepositoryAuthConfig_GetTypes,
} from "./sagemaker_ModelPrimaryContainerImageConfigRepositoryAuthConfig";

export interface sagemaker_ModelPrimaryContainerImageConfig {
  // Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). Allowed values are: `Platform` and `Vpc`.
  repositoryAccessMode?: string;

  // Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified Vpc as the value for the RepositoryAccessMode field, and the private Docker registry where the model image is hosted requires authentication. see Repository Auth Config.
  repositoryAuthConfig?: sagemaker_ModelPrimaryContainerImageConfigRepositoryAuthConfig;
}

export function sagemaker_ModelPrimaryContainerImageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryAccessMode",
      "Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). Allowed values are: `Platform` and `Vpc`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "repositoryAuthConfig",
      "Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified Vpc as the value for the RepositoryAccessMode field, and the private Docker registry where the model image is hosted requires authentication. see Repository Auth Config.",
      sagemaker_ModelPrimaryContainerImageConfigRepositoryAuthConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
