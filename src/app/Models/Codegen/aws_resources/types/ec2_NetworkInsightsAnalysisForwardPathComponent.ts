import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentRouteTableRoute,
  ec2_NetworkInsightsAnalysisForwardPathComponentRouteTableRoute_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentRouteTableRoute";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule,
  ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute,
  ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentAclRule,
  ec2_NetworkInsightsAnalysisForwardPathComponentAclRule_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentAclRule";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentSubnet,
  ec2_NetworkInsightsAnalysisForwardPathComponentSubnet_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentSubnet";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader,
  ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentSourceVpc,
  ec2_NetworkInsightsAnalysisForwardPathComponentSourceVpc_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentSourceVpc";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail,
  ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentTransitGateway,
  ec2_NetworkInsightsAnalysisForwardPathComponentTransitGateway_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentTransitGateway";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentAttachedTo,
  ec2_NetworkInsightsAnalysisForwardPathComponentAttachedTo_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentAttachedTo";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentDestinationVpc,
  ec2_NetworkInsightsAnalysisForwardPathComponentDestinationVpc_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentDestinationVpc";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader,
  ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentComponent,
  ec2_NetworkInsightsAnalysisForwardPathComponentComponent_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentComponent";
import {
  ec2_NetworkInsightsAnalysisForwardPathComponentVpc,
  ec2_NetworkInsightsAnalysisForwardPathComponentVpc_GetTypes,
} from "./ec2_NetworkInsightsAnalysisForwardPathComponentVpc";

export interface ec2_NetworkInsightsAnalysisForwardPathComponent {
  //
  attachedTos?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentAttachedTo>;

  //
  destinationVpcs?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentDestinationVpc>;

  //
  inboundHeaders?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader>;

  //
  securityGroupRules?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule>;

  //
  outboundHeaders?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader>;

  //
  routeTableRoutes?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentRouteTableRoute>;

  //
  transitGatewayRouteTableRoutes?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute>;

  //
  aclRules?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentAclRule>;

  //
  components?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentComponent>;

  //
  sequenceNumber?: number;

  //
  sourceVpcs?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentSourceVpc>;

  //
  additionalDetails?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail>;

  //
  subnets?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentSubnet>;

  //
  transitGateways?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentTransitGateway>;

  //
  vpcs?: Array<ec2_NetworkInsightsAnalysisForwardPathComponentVpc>;
}

export function ec2_NetworkInsightsAnalysisForwardPathComponent_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "transitGateways",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentTransitGateway_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "attachedTos",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentAttachedTo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inboundHeaders",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentInboundHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "routeTableRoutes",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentRouteTableRoute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "aclRules",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentAclRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalDetails",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentAdditionalDetail_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "transitGatewayRouteTableRoutes",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentTransitGatewayRouteTableRoute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "components",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentComponent_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnets",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentSubnet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destinationVpcs",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentDestinationVpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupRules",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentSecurityGroupRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outboundHeaders",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentOutboundHeader_GetTypes(),
      false,
      false,
    ),
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
      "sourceVpcs",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentSourceVpc_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcs",
      "",
      ec2_NetworkInsightsAnalysisForwardPathComponentVpc_GetTypes(),
      false,
      false,
    ),
  ];
}
