import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SshKeyArgs {
  // The name of the user account that is assigned to one or more servers.
  userName?: string;

  // The public key portion of an SSH key pair.
  body?: string;

  // The Server ID of the Transfer Server (e.g., `s-12345678`)
  serverId?: string;
}
export class SshKey extends DS_Resource {
  // The public key portion of an SSH key pair.
  public body?: string;

  // The Server ID of the Transfer Server (e.g., `s-12345678`)
  public serverId?: string;

  //
  public sshKeyId?: string;

  // The name of the user account that is assigned to one or more servers.
  public userName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "userName",
        "The name of the user account that is assigned to one or more servers.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "body",
        "The public key portion of an SSH key pair.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverId",
        "The Server ID of the Transfer Server (e.g., `s-12345678`)",
        () => [],
        true,
        true,
      ),
    ];
  }
}
