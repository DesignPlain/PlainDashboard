import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface backupdisasterrecovery_getManagementServerManagementUri {
  // The management console webUi.
  webUi?: string;

  // The management console api endpoint.
  api?: string;
}

export function backupdisasterrecovery_getManagementServerManagementUri_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "webUi",
      "The management console webUi.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "api",
      "The management console api endpoint.",
      [],
      true,
      false,
    ),
  ];
}
