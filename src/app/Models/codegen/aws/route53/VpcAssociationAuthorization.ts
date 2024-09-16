import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VpcAssociationAuthorizationArgs {
  // The VPC's region. Defaults to the region of the AWS provider.
  vpcRegion?: string;

  // The ID of the private hosted zone that you want to authorize associating a VPC with.
  zoneId?: string;

  // The VPC to authorize for association with the private hosted zone.
  vpcId?: string;
}
export class VpcAssociationAuthorization extends DS_Resource {
  // The VPC to authorize for association with the private hosted zone.
  public vpcId?: string;

  // The VPC's region. Defaults to the region of the AWS provider.
  public vpcRegion?: string;

  // The ID of the private hosted zone that you want to authorize associating a VPC with.
  public zoneId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'zoneId',
        'The ID of the private hosted zone that you want to authorize associating a VPC with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcId',
        'The VPC to authorize for association with the private hosted zone.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcRegion',
        "The VPC's region. Defaults to the region of the AWS provider.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
