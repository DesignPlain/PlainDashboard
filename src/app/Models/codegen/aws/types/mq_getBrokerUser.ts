import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mq_getBrokerUser {
  //
  groups?: Array<string>;

  //
  replicationUser?: boolean;

  //
  username?: string;

  //
  consoleAccess?: boolean;
}

export function mq_getBrokerUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "groups",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "replicationUser",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "username", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "consoleAccess",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
