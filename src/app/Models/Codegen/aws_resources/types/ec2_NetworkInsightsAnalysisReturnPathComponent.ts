import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute,
  ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentTransitGateway,
  ec2_NetworkInsightsAnalysisReturnPathComponentTransitGateway_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentTransitGateway";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute,
  ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentVpc,
  ec2_NetworkInsightsAnalysisReturnPathComponentVpc_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentVpc";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentDestinationVpc,
  ec2_NetworkInsightsAnalysisReturnPathComponentDestinationVpc_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentDestinationVpc";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentAclRule,
  ec2_NetworkInsightsAnalysisReturnPathComponentAclRule_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentAclRule";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentSubnet,
  ec2_NetworkInsightsAnalysisReturnPathComponentSubnet_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentSubnet";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader,
  ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentAttachedTo,
  ec2_NetworkInsightsAnalysisReturnPathComponentAttachedTo_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentAttachedTo";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule,
  ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader,
  ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentComponent,
  ec2_NetworkInsightsAnalysisReturnPathComponentComponent_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentComponent";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentSourceVpc,
  ec2_NetworkInsightsAnalysisReturnPathComponentSourceVpc_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentSourceVpc";
import {
  ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail,
  ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail_GetTypes,
} from "./ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail";

export interface ec2_NetworkInsightsAnalysisReturnPathComponent {
  //
  securityGroupRules?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule>;

  //
  aclRules?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentAclRule>;

  //
  outboundHeaders?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader>;

  //
  routeTableRoutes?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute>;

  //
  sourceVpcs?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentSourceVpc>;

  //
  subnets?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentSubnet>;

  //
  transitGateways?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentTransitGateway>;

  //
  inboundHeaders?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader>;

  //
  attachedTos?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentAttachedTo>;

  //
  components?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentComponent>;

  //
  destinationVpcs?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentDestinationVpc>;

  //
  sequenceNumber?: number;

  //
  transitGatewayRouteTableRoutes?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute>;

  //
  vpcs?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentVpc>;

  //
  additionalDetails?: Array<ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail>;
}

export function ec2_NetworkInsightsAnalysisReturnPathComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "sequenceNumber",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentSubnet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitGateways",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentTransitGateway_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "attachedTos",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentAttachedTo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aclRules",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentAclRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcs",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentVpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalDetails",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentAdditionalDetail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sourceVpcs",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentSourceVpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationVpcs",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentDestinationVpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitGatewayRouteTableRoutes",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentTransitGatewayRouteTableRoute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inboundHeaders",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentInboundHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "components",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentComponent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupRules",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentSecurityGroupRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outboundHeaders",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentOutboundHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "routeTableRoutes",
      "",
      ec2_NetworkInsightsAnalysisReturnPathComponentRouteTableRoute_GetTypes(),
      false,
      false,
    ),
  ];
}
