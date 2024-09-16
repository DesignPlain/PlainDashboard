import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute {
  //
  gatewayId?: string;

  //
  transitGatewayId?: string;

  //
  egressOnlyInternetGatewayId?: string;

  //
  instanceId?: string;

  //
  natGatewayId?: string;

  //
  networkInterfaceId?: string;

  //
  origin?: string;

  //
  vpcPeeringConnectionId?: string;

  //
  destinationCidr?: string;

  //
  destinationPrefixListId?: string;
}

export function ec2_getNetworkInsightsAnalysisForwardPathComponentRouteTableRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'gatewayId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'origin', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'vpcPeeringConnectionId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationPrefixListId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'transitGatewayId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'egressOnlyInternetGatewayId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'instanceId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'natGatewayId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkInterfaceId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationCidr',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
