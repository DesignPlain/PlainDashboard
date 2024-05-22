import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GroupAssociationArgs {
  // ARN of the canary.
  canaryArn?: string;

  // Name of the group that the canary will be associated with.
  groupName?: string;
}
export class GroupAssociation extends Resource {
  // ARN of the canary.
  public canaryArn?: string;

  //
  public groupArn?: string;

  // ID of the Group.
  public groupId?: string;

  // Name of the group that the canary will be associated with.
  public groupName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "canaryArn",
        "ARN of the canary.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupName",
        "Name of the group that the canary will be associated with.",
        [],
        true,
        true,
      ),
    ];
  }
}
