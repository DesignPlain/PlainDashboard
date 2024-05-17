import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securesourcemanager_InstanceHostConfig {
  /*
(Output)
Git SSH hostname.
*/
  GitSsh?: string;

  /*
(Output)
HTML hostname.
*/
  Html?: string;

  /*
(Output)
API hostname.
*/
  Api?: string;

  /*
(Output)
Git HTTP hostname.
*/
  GitHttp?: string;
}

export function Securesourcemanager_InstanceHostConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Api",
      "(Output)\nAPI hostname.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GitHttp",
      "(Output)\nGit HTTP hostname.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GitSsh",
      "(Output)\nGit SSH hostname.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Html",
      "(Output)\nHTML hostname.",
      [],
      false,
      false,
    ),
  ];
}
