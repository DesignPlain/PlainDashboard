import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigateway_ApiConfigManagedServiceConfig {
  // Base64 encoded content of the file.
  contents?: string;

  // The file path (full or relative path). This is typically the path of the file when it is uploaded.
  path?: string;
}

export function apigateway_ApiConfigManagedServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contents",
      "Base64 encoded content of the file.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The file path (full or relative path). This is typically the path of the file when it is uploaded.",
      [],
      true,
      true,
    ),
  ];
}
