import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository,
  sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository";
import {
  sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec";

export interface sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings {
  // A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see `code_repository` Block below.
  codeRepositories?: Array<sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_DomainDefaultUserSettingsJupyterServerAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "codeRepositories",
      "A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see `code_repository` Block below.",
      sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsCodeRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.",
      sagemaker_DomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "lifecycleConfigArns",
      "The Amazon Resource Name (ARN) of the Lifecycle Configurations.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
