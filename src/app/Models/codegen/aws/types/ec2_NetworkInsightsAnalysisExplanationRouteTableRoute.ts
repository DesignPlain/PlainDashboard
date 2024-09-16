import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_NetworkInsightsAnalysisExplanationRouteTableRoute {
  //
  destinationCidr?: string;

  //
  origin?: string;

  //
  transitGatewayId?: string;

  //
  vpcPeeringConnectionId?: string;

  //
  destinationPrefixListId?: string;

  //
  egressOnlyInternetGatewayId?: string;

  //
  gatewayId?: string;

  //
  instanceId?: string;

  //
  natGatewayId?: string;

  //
  networkInterfaceId?: string;
}

export function ec2_NetworkInsightsAnalysisExplanationRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'gatewayId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkInterfaceId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationCidr',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'egressOnlyInternetGatewayId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vpcPeeringConnectionId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationPrefixListId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'natGatewayId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'origin', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'transitGatewayId',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
