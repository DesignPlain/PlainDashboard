import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SubnetGroupArgs {
  // The name of the subnet group.
  name?: string;

  // A list of VPC subnet IDs for the subnet group.
  subnetIds?: Array<string>;

  // A description of the subnet group.
  description?: string;
}
export class SubnetGroup extends Resource {
  // A list of VPC subnet IDs for the subnet group.
  public subnetIds?: Array<string>;

  // VPC ID of the subnet group.
  public vpcId?: string;

  // A description of the subnet group.
  public description?: string;

  // The name of the subnet group.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the subnet group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "A list of VPC subnet IDs for the subnet group.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the subnet group.",
        [],
        false,
        false,
      ),
    ];
  }
}
