import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository,
  sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository";
import {
  sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec,
  sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec";

export interface sagemaker_SpaceSpaceSettingsJupyterLabAppSettings {
  // A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see Code Repository below.
  codeRepositories?: Array<sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.
  defaultResourceSpec?: sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
}

export function sagemaker_SpaceSpaceSettingsJupyterLabAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "codeRepositories",
      "A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterServer application. see Code Repository below.",
      sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see Default Resource Spec below.",
      sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec_GetTypes(),
      true,
      false,
    ),
  ];
}
