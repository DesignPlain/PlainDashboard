import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Backupdisasterrecovery_getManagementServerManagementUri {
  // The management console api endpoint.
  Api?: string;

  // The management console webUi.
  WebUi?: string;
}

export function Backupdisasterrecovery_getManagementServerManagementUri_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Api",
      "The management console api endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WebUi",
      "The management console webUi.",
      [],
      true,
      false,
    ),
  ];
}
