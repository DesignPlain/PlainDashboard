import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface NetworkInterfaceSecurityGroupAttachmentArgs {
  // The ID of the network interface to attach to.
  networkInterfaceId?: string;

  // The ID of the security group.
  securityGroupId?: string;
}
export class NetworkInterfaceSecurityGroupAttachment extends DS_Resource {
  // The ID of the network interface to attach to.
  public networkInterfaceId?: string;

  // The ID of the security group.
  public securityGroupId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "networkInterfaceId",
        "The ID of the network interface to attach to.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityGroupId",
        "The ID of the security group.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
