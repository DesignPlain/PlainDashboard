import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings {
  //
  amazonBedrockRoleArn?: string;
}

export function sagemaker_DomainDefaultUserSettingsCanvasAppSettingsGenerativeAiSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "amazonBedrockRoleArn",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
