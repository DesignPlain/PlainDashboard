import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_UserProfileUserSettingsJupyterServerAppSettingsCodeRepository,
  sagemaker_UserProfileUserSettingsJupyterServerAppSettingsCodeRepository_GetTypes,
} from "./sagemaker_UserProfileUserSettingsJupyterServerAppSettingsCodeRepository";
import {
  sagemaker_UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec,
  sagemaker_UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec";

export interface sagemaker_UserProfileUserSettingsJupyterServerAppSettings {
  // A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see Code Repository below.
  codeRepositories?: Array<sagemaker_UserProfileUserSettingsJupyterServerAppSettingsCodeRepository>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_UserProfileUserSettingsJupyterServerAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "codeRepositories",
      "A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see Code Repository below.",
      () =>
        sagemaker_UserProfileUserSettingsJupyterServerAppSettingsCodeRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      () =>
        sagemaker_UserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes(),
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
