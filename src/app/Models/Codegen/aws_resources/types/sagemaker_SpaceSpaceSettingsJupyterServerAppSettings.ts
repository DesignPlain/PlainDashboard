import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository,
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository";
import {
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec,
  sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec";

export interface sagemaker_SpaceSpaceSettingsJupyterServerAppSettings {
  // A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see Code Repository below.
  codeRepositories?: Array<sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_SpaceSpaceSettingsJupyterServerAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes(),
      true,
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
    new DynamicUIProps(
      InputType.Array,
      "codeRepositories",
      "A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see Code Repository below.",
      sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository_GetTypes(),
      false,
      false,
    ),
  ];
}
