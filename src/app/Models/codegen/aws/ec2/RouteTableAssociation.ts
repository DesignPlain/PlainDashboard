import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RouteTableAssociationArgs {
  // The gateway ID to create an association. Conflicts with `subnet_id`.
  gatewayId?: string;

  // The ID of the routing table to associate with.
  routeTableId?: string;

  // The subnet ID to create an association. Conflicts with `gateway_id`.
  subnetId?: string;
}
export class RouteTableAssociation extends DS_Resource {
  // The gateway ID to create an association. Conflicts with `subnet_id`.
  public gatewayId?: string;

  // The ID of the routing table to associate with.
  public routeTableId?: string;

  // The subnet ID to create an association. Conflicts with `gateway_id`.
  public subnetId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'The subnet ID to create an association. Conflicts with `gateway_id`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayId',
        'The gateway ID to create an association. Conflicts with `subnet_id`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'routeTableId',
        'The ID of the routing table to associate with.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
