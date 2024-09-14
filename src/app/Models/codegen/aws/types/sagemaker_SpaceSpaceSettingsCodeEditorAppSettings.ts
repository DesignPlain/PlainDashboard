import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec,
  sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec";

export interface sagemaker_SpaceSpaceSettingsCodeEditorAppSettings {
  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. See `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;
}

export function sagemaker_SpaceSpaceSettingsCodeEditorAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. See `default_resource_spec` Block below.",
      () =>
        sagemaker_SpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec_GetTypes(),
      true,
      false,
    ),
  ];
}
