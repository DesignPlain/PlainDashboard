import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface GatewayAssociationArgs {
  // VPC prefixes (CIDRs) to advertise to the Direct Connect gateway. Defaults to the CIDR block of the VPC associated with the Virtual Gateway. To enable drift detection, must be configured.
  allowedPrefixes?: Array<string>;

  /*
The ID of the VGW or transit gateway with which to associate the Direct Connect gateway.
Used for single account Direct Connect gateway associations.
*/
  associatedGatewayId?: string;

  /*
The ID of the AWS account that owns the VGW or transit gateway with which to associate the Direct Connect gateway.
Used for cross-account Direct Connect gateway associations.
*/
  associatedGatewayOwnerAccountId?: string;

  // The ID of the Direct Connect gateway.
  dxGatewayId?: string;

  /*
The ID of the Direct Connect gateway association proposal.
Used for cross-account Direct Connect gateway associations.
*/
  proposalId?: string;

  //
  vpnGatewayId?: string;
}
export class GatewayAssociation extends DS_Resource {
  //
  public vpnGatewayId?: string;

  // The ID of the Direct Connect gateway association.
  public dxGatewayAssociationId?: string;

  // The ID of the Direct Connect gateway.
  public dxGatewayId?: string;

  /*
The ID of the Direct Connect gateway association proposal.
Used for cross-account Direct Connect gateway associations.
*/
  public proposalId?: string;

  // The type of the associated gateway, `transitGateway` or `virtualPrivateGateway`.
  public associatedGatewayType?: string;

  // The ID of the AWS account that owns the Direct Connect gateway.
  public dxGatewayOwnerAccountId?: string;

  // VPC prefixes (CIDRs) to advertise to the Direct Connect gateway. Defaults to the CIDR block of the VPC associated with the Virtual Gateway. To enable drift detection, must be configured.
  public allowedPrefixes?: Array<string>;

  /*
The ID of the VGW or transit gateway with which to associate the Direct Connect gateway.
Used for single account Direct Connect gateway associations.
*/
  public associatedGatewayId?: string;

  /*
The ID of the AWS account that owns the VGW or transit gateway with which to associate the Direct Connect gateway.
Used for cross-account Direct Connect gateway associations.
*/
  public associatedGatewayOwnerAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'allowedPrefixes',
        'VPC prefixes (CIDRs) to advertise to the Direct Connect gateway. Defaults to the CIDR block of the VPC associated with the Virtual Gateway. To enable drift detection, must be configured.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'associatedGatewayId',
        'The ID of the VGW or transit gateway with which to associate the Direct Connect gateway.\nUsed for single account Direct Connect gateway associations.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'associatedGatewayOwnerAccountId',
        'The ID of the AWS account that owns the VGW or transit gateway with which to associate the Direct Connect gateway.\nUsed for cross-account Direct Connect gateway associations.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dxGatewayId',
        'The ID of the Direct Connect gateway.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'proposalId',
        'The ID of the Direct Connect gateway association proposal.\nUsed for cross-account Direct Connect gateway associations.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpnGatewayId',
        '',
        () => [],
        false,
        true,
      ),
    ];
  }
}
