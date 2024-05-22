import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_HumanTaskUIUiTemplate {
  // The content of the Liquid template for the worker user interface.
  content?: string;

  // The SHA-256 digest of the contents of the template.
  contentSha256?: string;

  // The URL for the user interface template.
  url?: string;
}

export function sagemaker_HumanTaskUIUiTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "content",
      "The content of the Liquid template for the worker user interface.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "contentSha256",
      "The SHA-256 digest of the contents of the template.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "The URL for the user interface template.",
      [],
      false,
      false,
    ),
  ];
}
