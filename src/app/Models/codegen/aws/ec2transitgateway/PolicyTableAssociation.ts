import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PolicyTableAssociationArgs {
  // Identifier of EC2 Transit Gateway Attachment.
  transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Policy Table.
  transitGatewayPolicyTableId?: string;
}
export class PolicyTableAssociation extends DS_Resource {
  // Identifier of EC2 Transit Gateway Attachment.
  public transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Policy Table.
  public transitGatewayPolicyTableId?: string;

  // Identifier of the resource
  public resourceId?: string;

  // Type of the resource
  public resourceType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "transitGatewayAttachmentId",
        "Identifier of EC2 Transit Gateway Attachment.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayPolicyTableId",
        "Identifier of EC2 Transit Gateway Policy Table.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
