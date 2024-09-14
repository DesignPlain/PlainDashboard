import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ContactArgs {
  // A unique and identifiable alias for the contact or escalation plan. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), and hyphens (`-`).
  alias?: string;

  // Full friendly name of the contact or escalation plan. If set, must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.
  displayName?: string;

  // Map of tags to assign to the resource.
  tags?: Map<string, string>;

  /*
The type of contact engaged. A single contact is type PERSONAL and an escalation
plan is type ESCALATION.

The following arguments are optional:
*/
  type?: string;
}
export class Contact extends DS_Resource {
  // Full friendly name of the contact or escalation plan. If set, must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.
  public displayName?: string;

  // Map of tags to assign to the resource.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The type of contact engaged. A single contact is type PERSONAL and an escalation
plan is type ESCALATION.

The following arguments are optional:
*/
  public type?: string;

  // A unique and identifiable alias for the contact or escalation plan. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), and hyphens (`-`).
  public alias?: string;

  // The Amazon Resource Name (ARN) of the contact or escalation plan.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "alias",
        "A unique and identifiable alias for the contact or escalation plan. Must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), and hyphens (`-`).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Full friendly name of the contact or escalation plan. If set, must be between 1 and 255 characters, and may contain alphanumerics, underscores (`_`), hyphens (`-`), periods (`.`), and spaces.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of contact engaged. A single contact is type PERSONAL and an escalation\nplan is type ESCALATION.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
    ];
  }
}
