import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mq_getBrokerUser {
  //
  consoleAccess?: boolean;

  //
  groups?: Array<string>;

  //
  replicationUser?: boolean;

  //
  username?: string;
}

export function mq_getBrokerUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "consoleAccess", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "groups",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "replicationUser", "", [], true, false),
    new DynamicUIProps(InputType.String, "username", "", [], true, false),
  ];
}
