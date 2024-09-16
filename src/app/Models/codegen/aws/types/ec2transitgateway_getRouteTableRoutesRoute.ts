import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2transitgateway_getRouteTableRoutesRoute {
  // The ID of the prefix list used for destination matches.
  prefixListId?: string;

  // The current state of the route, can be `active`, `deleted`, `pending`, `blackhole`, `deleting`.
  state?: string;

  // The id of the transit gateway route table announcement, most of the time it is an empty string.
  transitGatewayRouteTableAnnouncementId?: string;

  // The type of the route, can be `propagated` or `static`.
  type?: string;

  // The CIDR used for route destination matches.
  destinationCidrBlock?: string;
}

export function ec2transitgateway_getRouteTableRoutesRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'prefixListId',
      'The ID of the prefix list used for destination matches.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      'The current state of the route, can be `active`, `deleted`, `pending`, `blackhole`, `deleting`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'transitGatewayRouteTableAnnouncementId',
      'The id of the transit gateway route table announcement, most of the time it is an empty string.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of the route, can be `propagated` or `static`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'destinationCidrBlock',
      'The CIDR used for route destination matches.',
      () => [],
      true,
      false,
    ),
  ];
}
