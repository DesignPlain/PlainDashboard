import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_ModelContainerImageConfigRepositoryAuthConfig,
  sagemaker_ModelContainerImageConfigRepositoryAuthConfig_GetTypes,
} from './sagemaker_ModelContainerImageConfigRepositoryAuthConfig';

export interface sagemaker_ModelContainerImageConfig {
  // Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). Allowed values are: `Platform` and `Vpc`.
  repositoryAccessMode?: string;

  // Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified Vpc as the value for the RepositoryAccessMode field, and the private Docker registry where the model image is hosted requires authentication. see Repository Auth Config.
  repositoryAuthConfig?: sagemaker_ModelContainerImageConfigRepositoryAuthConfig;
}

export function sagemaker_ModelContainerImageConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'repositoryAccessMode',
      'Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC). Allowed values are: `Platform` and `Vpc`.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'repositoryAuthConfig',
      'Specifies an authentication configuration for the private docker registry where your model image is hosted. Specify a value for this property only if you specified Vpc as the value for the RepositoryAccessMode field, and the private Docker registry where the model image is hosted requires authentication. see Repository Auth Config.',
      () => sagemaker_ModelContainerImageConfigRepositoryAuthConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
