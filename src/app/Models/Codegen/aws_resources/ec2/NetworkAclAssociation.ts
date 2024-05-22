import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NetworkAclAssociationArgs {
  // The ID of the network ACL.
  networkAclId?: string;

  // The ID of the associated Subnet.
  subnetId?: string;
}
export class NetworkAclAssociation extends Resource {
  // The ID of the network ACL.
  public networkAclId?: string;

  // The ID of the associated Subnet.
  public subnetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "networkAclId",
        "The ID of the network ACL.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the associated Subnet.",
        [],
        true,
        true,
      ),
    ];
  }
}
