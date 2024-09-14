import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AvailabilityZoneGroupArgs {
  // Name of the Availability Zone Group.
  groupName?: string;

  // Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.
  optInStatus?: string;
}
export class AvailabilityZoneGroup extends DS_Resource {
  // Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.
  public optInStatus?: string;

  // Name of the Availability Zone Group.
  public groupName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "groupName",
        "Name of the Availability Zone Group.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "optInStatus",
        "Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
