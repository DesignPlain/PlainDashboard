import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SshKeyArgs {
  // The public key portion of an SSH key pair.
  body?: string;

  // The Server ID of the Transfer Server (e.g., `s-12345678`)
  serverId?: string;

  // The name of the user account that is assigned to one or more servers.
  userName?: string;
}
export class SshKey extends Resource {
  // The name of the user account that is assigned to one or more servers.
  public userName?: string;

  // The public key portion of an SSH key pair.
  public body?: string;

  // The Server ID of the Transfer Server (e.g., `s-12345678`)
  public serverId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serverId",
        "The Server ID of the Transfer Server (e.g., `s-12345678`)",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userName",
        "The name of the user account that is assigned to one or more servers.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "body",
        "The public key portion of an SSH key pair.",
        [],
        true,
        true,
      ),
    ];
  }
}
