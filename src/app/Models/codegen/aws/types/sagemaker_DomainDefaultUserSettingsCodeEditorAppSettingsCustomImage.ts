import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage {
  // The name of the App Image Config.
  appImageConfigName?: string;

  // The name of the Custom Image.
  imageName?: string;

  // The version number of the Custom Image.
  imageVersionNumber?: number;
}

export function sagemaker_DomainDefaultUserSettingsCodeEditorAppSettingsCustomImage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "appImageConfigName",
      "The name of the App Image Config.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageName",
      "The name of the Custom Image.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "imageVersionNumber",
      "The version number of the Custom Image.",
      () => [],
      false,
      false,
    ),
  ];
}
