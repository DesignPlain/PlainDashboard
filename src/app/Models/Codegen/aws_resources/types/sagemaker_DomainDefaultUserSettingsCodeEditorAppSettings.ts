import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec";

export interface sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings {
  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_DomainDefaultUserSettingsCodeEditorAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.",
      sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes(),
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
