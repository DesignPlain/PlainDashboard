import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PolicyTableAssociationArgs {
  // Identifier of EC2 Transit Gateway Attachment.
  transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Policy Table.
  transitGatewayPolicyTableId?: string;
}
export class PolicyTableAssociation extends Resource {
  // Type of the resource
  public resourceType?: string;

  // Identifier of EC2 Transit Gateway Attachment.
  public transitGatewayAttachmentId?: string;

  // Identifier of EC2 Transit Gateway Policy Table.
  public transitGatewayPolicyTableId?: string;

  // Identifier of the resource
  public resourceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "transitGatewayAttachmentId",
        "Identifier of EC2 Transit Gateway Attachment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayPolicyTableId",
        "Identifier of EC2 Transit Gateway Policy Table.",
        [],
        true,
        true,
      ),
    ];
  }
}
