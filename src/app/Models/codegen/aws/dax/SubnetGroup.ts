import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SubnetGroupArgs {
  // A description of the subnet group.
  description?: string;

  // The name of the subnet group.
  name?: string;

  // A list of VPC subnet IDs for the subnet group.
  subnetIds?: Array<string>;
}
export class SubnetGroup extends DS_Resource {
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
        "description",
        "A description of the subnet group.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the subnet group.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "A list of VPC subnet IDs for the subnet group.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
