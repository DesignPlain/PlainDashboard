import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mq_BrokerUser {
  /*
Username of the user.

> --NOTE:-- AWS currently does not support updating RabbitMQ users. Updates to users can only be in the RabbitMQ UI.
*/
  username?: string;

  // Whether to enable access to the [ActiveMQ Web Console](http://activemq.apache.org/web-console.html) for the user. Applies to `engine_type` of `ActiveMQ` only.
  consoleAccess?: boolean;

  // List of groups (20 maximum) to which the ActiveMQ user belongs. Applies to `engine_type` of `ActiveMQ` only.
  groups?: Array<string>;

  // Password of the user. It must be 12 to 250 characters long, at least 4 unique characters, and must not contain commas.
  password?: string;

  // Whether to set set replication user. Defaults to `false`.
  replicationUser?: boolean;
}

export function mq_BrokerUser_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username of the user.\n\n> **NOTE:** AWS currently does not support updating RabbitMQ users. Updates to users can only be in the RabbitMQ UI.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "consoleAccess",
      "Whether to enable access to the [ActiveMQ Web Console](http://activemq.apache.org/web-console.html) for the user. Applies to `engine_type` of `ActiveMQ` only.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "groups",
      "List of groups (20 maximum) to which the ActiveMQ user belongs. Applies to `engine_type` of `ActiveMQ` only.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "password",
      "Password of the user. It must be 12 to 250 characters long, at least 4 unique characters, and must not contain commas.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "replicationUser",
      "Whether to set set replication user. Defaults to `false`.",
      () => [],
      false,
      false,
    ),
  ];
}
