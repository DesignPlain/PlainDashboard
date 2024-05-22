import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ThingGroupMembershipArgs {
  // Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.
  overrideDynamicGroup?: boolean;

  // The name of the group to which you are adding a thing.
  thingGroupName?: string;

  // The name of the thing to add to a group.
  thingName?: string;
}
export class ThingGroupMembership extends Resource {
  // Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.
  public overrideDynamicGroup?: boolean;

  // The name of the group to which you are adding a thing.
  public thingGroupName?: string;

  // The name of the thing to add to a group.
  public thingName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "overrideDynamicGroup",
        "Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "thingGroupName",
        "The name of the group to which you are adding a thing.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "thingName",
        "The name of the thing to add to a group.",
        [],
        true,
        true,
      ),
    ];
  }
}
