import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ZoneAssociationArgs {
  // The VPC to associate with the private hosted zone.
  vpcId?: string;

  // The VPC's region. Defaults to the region of the AWS provider.
  vpcRegion?: string;

  // The private hosted zone to associate.
  zoneId?: string;
}
export class ZoneAssociation extends DS_Resource {
  // The account ID of the account that created the hosted zone.
  public owningAccount?: string;

  // The VPC to associate with the private hosted zone.
  public vpcId?: string;

  // The VPC's region. Defaults to the region of the AWS provider.
  public vpcRegion?: string;

  // The private hosted zone to associate.
  public zoneId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'vpcId',
        'The VPC to associate with the private hosted zone.',
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
      new DynamicUIProps(
        InputType.String,
        'zoneId',
        'The private hosted zone to associate.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
