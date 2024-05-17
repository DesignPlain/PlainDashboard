import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Backupdisasterrecovery_ManagementServerManagementUri {
  /*
(Output)
The management console api endpoint.
*/
  Api?: string;

  /*
(Output)
The management console webUi.
*/
  WebUi?: string;
}

export function Backupdisasterrecovery_ManagementServerManagementUri_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Api",
      "(Output)\nThe management console api endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WebUi",
      "(Output)\nThe management console webUi.",
      [],
      false,
      false,
    ),
  ];
}
