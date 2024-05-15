import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Apigateway_ApiConfigManagedServiceConfig {
  // Base64 encoded content of the file.
  Contents?: string;

  // The file path (full or relative path). This is typically the path of the file when it is uploaded.
  Path?: string;
}

export function Apigateway_ApiConfigManagedServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Contents",
      "Base64 encoded content of the file.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "The file path (full or relative path). This is typically the path of the file when it is uploaded.",
      [],
      true,
      true,
    ),
  ];
}
