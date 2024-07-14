import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface MulticastDomainAssociationArgs {
  // The ID of the subnet to associate with the transit gateway multicast domain.
  subnetId?: string;

  // The ID of the transit gateway attachment.
  transitGatewayAttachmentId?: string;

  // The ID of the transit gateway multicast domain.
  transitGatewayMulticastDomainId?: string;
}
export class MulticastDomainAssociation extends Resource {
  // The ID of the subnet to associate with the transit gateway multicast domain.
  public subnetId?: string;

  // The ID of the transit gateway attachment.
  public transitGatewayAttachmentId?: string;

  // The ID of the transit gateway multicast domain.
  public transitGatewayMulticastDomainId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet to associate with the transit gateway multicast domain.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayAttachmentId",
        "The ID of the transit gateway attachment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayMulticastDomainId",
        "The ID of the transit gateway multicast domain.",
        [],
        true,
        true,
      ),
    ];
  }
}
