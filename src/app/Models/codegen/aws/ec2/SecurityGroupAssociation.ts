import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SecurityGroupAssociationArgs {
  // The ID of the VPC endpoint with which the security group will be associated.
  vpcEndpointId?: string;

  // Whether this association should replace the association with the VPC's default security group that is created when no security groups are specified during VPC endpoint creation. At most 1 association per-VPC endpoint should be configured with `replace_default_association = true`.
  replaceDefaultAssociation?: boolean;

  // The ID of the security group to be associated with the VPC endpoint.
  securityGroupId?: string;
}
export class SecurityGroupAssociation extends DS_Resource {
  // Whether this association should replace the association with the VPC's default security group that is created when no security groups are specified during VPC endpoint creation. At most 1 association per-VPC endpoint should be configured with `replace_default_association = true`.
  public replaceDefaultAssociation?: boolean;

  // The ID of the security group to be associated with the VPC endpoint.
  public securityGroupId?: string;

  // The ID of the VPC endpoint with which the security group will be associated.
  public vpcEndpointId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'vpcEndpointId',
        'The ID of the VPC endpoint with which the security group will be associated.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'replaceDefaultAssociation',
        "Whether this association should replace the association with the VPC's default security group that is created when no security groups are specified during VPC endpoint creation. At most 1 association per-VPC endpoint should be configured with `replace_default_association = true`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'securityGroupId',
        'The ID of the security group to be associated with the VPC endpoint.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
