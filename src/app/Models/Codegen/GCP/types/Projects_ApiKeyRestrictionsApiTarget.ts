import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Projects_ApiKeyRestrictionsApiTarget {
  // Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (-) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get-` `translate.googleapis.com.Get-`
  Methods?: Array<string>;

  // The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.
  Service?: string;
}

export function Projects_ApiKeyRestrictionsApiTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Service",
      "The service for this restriction. It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Methods",
      "Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
