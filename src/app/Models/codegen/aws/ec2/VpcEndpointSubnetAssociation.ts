import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpcEndpointSubnetAssociationArgs {
  // The ID of the VPC endpoint with which the subnet will be associated.
  vpcEndpointId?: string;

  // The ID of the subnet to be associated with the VPC endpoint.
  subnetId?: string;
}
export class VpcEndpointSubnetAssociation extends DS_Resource {
  // The ID of the subnet to be associated with the VPC endpoint.
  public subnetId?: string;

  // The ID of the VPC endpoint with which the subnet will be associated.
  public vpcEndpointId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'vpcEndpointId',
        'The ID of the VPC endpoint with which the subnet will be associated.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'The ID of the subnet to be associated with the VPC endpoint.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
