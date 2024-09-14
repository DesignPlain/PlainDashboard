import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2transitgateway_getMulticastDomainAssociation {
  // The ID of the subnet associated with the transit gateway multicast domain.
  subnetId?: string;

  // The ID of the transit gateway attachment.
  transitGatewayAttachmentId?: string;
}

export function ec2transitgateway_getMulticastDomainAssociation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The ID of the subnet associated with the transit gateway multicast domain.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transitGatewayAttachmentId",
      "The ID of the transit gateway attachment.",
      () => [],
      true,
      false,
    ),
  ];
}
