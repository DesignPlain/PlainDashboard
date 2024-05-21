import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securesourcemanager_InstanceHostConfig {
  /*
(Output)
API hostname.
*/
  api?: string;

  /*
(Output)
Git HTTP hostname.
*/
  gitHttp?: string;

  /*
(Output)
Git SSH hostname.
*/
  gitSsh?: string;

  /*
(Output)
HTML hostname.
*/
  html?: string;
}

export function securesourcemanager_InstanceHostConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "api",
      "(Output)\nAPI hostname.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gitHttp",
      "(Output)\nGit HTTP hostname.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gitSsh",
      "(Output)\nGit SSH hostname.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "html",
      "(Output)\nHTML hostname.",
      [],
      false,
      false,
    ),
  ];
}
