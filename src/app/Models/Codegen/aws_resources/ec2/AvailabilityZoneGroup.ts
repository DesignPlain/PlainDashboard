import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AvailabilityZoneGroupArgs {
  // Name of the Availability Zone Group.
  groupName?: string;

  // Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.
  optInStatus?: string;
}
export class AvailabilityZoneGroup extends Resource {
  // Name of the Availability Zone Group.
  public groupName?: string;

  // Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.
  public optInStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "groupName",
        "Name of the Availability Zone Group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "optInStatus",
        "Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.",
        [],
        true,
        false,
      ),
    ];
  }
}
