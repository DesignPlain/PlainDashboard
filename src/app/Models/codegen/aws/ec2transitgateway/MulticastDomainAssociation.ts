import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface MulticastDomainAssociationArgs {
  // The ID of the subnet to associate with the transit gateway multicast domain.
  subnetId?: string;

  // The ID of the transit gateway attachment.
  transitGatewayAttachmentId?: string;

  // The ID of the transit gateway multicast domain.
  transitGatewayMulticastDomainId?: string;
}
export class MulticastDomainAssociation extends DS_Resource {
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
        "transitGatewayMulticastDomainId",
        "The ID of the transit gateway multicast domain.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet to associate with the transit gateway multicast domain.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayAttachmentId",
        "The ID of the transit gateway attachment.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
