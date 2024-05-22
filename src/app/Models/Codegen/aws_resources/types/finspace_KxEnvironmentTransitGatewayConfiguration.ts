import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration,
  finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration_GetTypes,
} from "./finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration";

export interface finspace_KxEnvironmentTransitGatewayConfiguration {
  // Rules that define how you manage outbound traffic from kdb network to your internal network. Defined below.
  attachmentNetworkAclConfigurations?: Array<finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration>;

  // Routing CIDR on behalf of KX environment. It could be any “/26 range in the 100.64.0.0 CIDR space. After providing, it will be added to the customer’s transit gateway routing table so that the traffics could be routed to KX network.
  routableCidrSpace?: string;

  // Identifier of the transit gateway created by the customer to connect outbound traffics from KX network to your internal network.
  transitGatewayId?: string;
}

export function finspace_KxEnvironmentTransitGatewayConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "attachmentNetworkAclConfigurations",
      "Rules that define how you manage outbound traffic from kdb network to your internal network. Defined below.",
      finspace_KxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routableCidrSpace",
      "Routing CIDR on behalf of KX environment. It could be any “/26 range in the 100.64.0.0 CIDR space. After providing, it will be added to the customer’s transit gateway routing table so that the traffics could be routed to KX network.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transitGatewayId",
      "Identifier of the transit gateway created by the customer to connect outbound traffics from KX network to your internal network.",
      [],
      true,
      false,
    ),
  ];
}
