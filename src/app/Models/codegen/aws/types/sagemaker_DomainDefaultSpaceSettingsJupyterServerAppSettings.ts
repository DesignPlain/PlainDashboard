import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository,
  sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository_GetTypes,
} from "./sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository";
import {
  sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec";

export interface sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings {
  // A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see `code_repository` Block below.
  codeRepositories?: Array<sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "codeRepositories",
      "A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see `code_repository` Block below.",
      () =>
        sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsCodeRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.",
      () =>
        sagemaker_DomainDefaultSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "lifecycleConfigArns",
      "The Amazon Resource Name (ARN) of the Lifecycle Configurations.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
