import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentVpc,
  ec2_getNetworkInsightsAnalysisReturnPathComponentVpc_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentVpc";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentSourceVpc,
  ec2_getNetworkInsightsAnalysisReturnPathComponentSourceVpc_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentSourceVpc";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute,
  ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGateway,
  ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGateway_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGateway";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule,
  ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule,
  ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute,
  ec2_getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet,
  ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentComponent,
  ec2_getNetworkInsightsAnalysisReturnPathComponentComponent_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentComponent";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader,
  ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentDestinationVpc,
  ec2_getNetworkInsightsAnalysisReturnPathComponentDestinationVpc_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentDestinationVpc";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail,
  ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentAttachedTo,
  ec2_getNetworkInsightsAnalysisReturnPathComponentAttachedTo_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentAttachedTo";
import {
  ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader,
  ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader_GetTypes,
} from "./ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader";

export interface ec2_getNetworkInsightsAnalysisReturnPathComponent {
  //
  aclRules?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule>;

  //
  inboundHeaders?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader>;

  //
  routeTableRoutes?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute>;

  //
  sequenceNumber?: number;

  //
  vpcs?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentVpc>;

  //
  destinationVpcs?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentDestinationVpc>;

  //
  sourceVpcs?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentSourceVpc>;

  //
  additionalDetails?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail>;

  //
  attachedTos?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentAttachedTo>;

  //
  securityGroupRules?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule>;

  //
  subnets?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet>;

  //
  transitGatewayRouteTableRoutes?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute>;

  //
  components?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentComponent>;

  //
  outboundHeaders?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader>;

  //
  transitGateways?: Array<ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGateway>;
}

export function ec2_getNetworkInsightsAnalysisReturnPathComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "inboundHeaders",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentInboundHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcs",
      "",
      () => ec2_getNetworkInsightsAnalysisReturnPathComponentVpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitGatewayRouteTableRoutes",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aclRules",
      "",
      () => ec2_getNetworkInsightsAnalysisReturnPathComponentAclRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "attachedTos",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentAttachedTo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupRules",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentSecurityGroupRule_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outboundHeaders",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentOutboundHeader_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "routeTableRoutes",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentRouteTableRoute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sequenceNumber",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceVpcs",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentSourceVpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalDetails",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentAdditionalDetail_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationVpcs",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentDestinationVpc_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "",
      () => ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "components",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentComponent_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitGateways",
      "",
      () =>
        ec2_getNetworkInsightsAnalysisReturnPathComponentTransitGateway_GetTypes(),
      true,
      false,
    ),
  ];
}
