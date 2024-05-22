import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec";

export interface sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings {
  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec;
}

export function sagemaker_DomainDefaultUserSettingsTensorBoardAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.",
      sagemaker_DomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
