import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ssm_ContactsRotationRecurrence,
  ssm_ContactsRotationRecurrence_GetTypes,
} from "../types/ssm_ContactsRotationRecurrence";

export interface ContactsRotationArgs {
  // Amazon Resource Names (ARNs) of the contacts to add to the rotation. The order in which you list the contacts is their shift order in the rotation schedule.
  contactIds?: Array<string>;

  // The name for the rotation.
  name?: string;

  /*
Information about when an on-call rotation is in effect and how long the rotation period lasts. Exactly one of either `daily_settings`, `monthly_settings`, or `weekly_settings` must be populated. See Recurrence for more details.

The following arguments are optional:
*/
  recurrence?: ssm_ContactsRotationRecurrence;

  // The date and time, in RFC 3339 format, that the rotation goes into effect.
  startTime?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The time zone to base the rotation’s activity on in Internet Assigned Numbers Authority (IANA) format.
  timeZoneId?: string;
}
export class ContactsRotation extends Resource {
  // The date and time, in RFC 3339 format, that the rotation goes into effect.
  public startTime?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The time zone to base the rotation’s activity on in Internet Assigned Numbers Authority (IANA) format.
  public timeZoneId?: string;

  // The Amazon Resource Name (ARN) of the rotation.
  public arn?: string;

  // Amazon Resource Names (ARNs) of the contacts to add to the rotation. The order in which you list the contacts is their shift order in the rotation schedule.
  public contactIds?: Array<string>;

  // The name for the rotation.
  public name?: string;

  /*
Information about when an on-call rotation is in effect and how long the rotation period lasts. Exactly one of either `daily_settings`, `monthly_settings`, or `weekly_settings` must be populated. See Recurrence for more details.

The following arguments are optional:
*/
  public recurrence?: ssm_ContactsRotationRecurrence;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "timeZoneId",
        "The time zone to base the rotation’s activity on in Internet Assigned Numbers Authority (IANA) format.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "contactIds",
        "Amazon Resource Names (ARNs) of the contacts to add to the rotation. The order in which you list the contacts is their shift order in the rotation schedule.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the rotation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "recurrence",
        "Information about when an on-call rotation is in effect and how long the rotation period lasts. Exactly one of either `daily_settings`, `monthly_settings`, or `weekly_settings` must be populated. See Recurrence for more details.\n\nThe following arguments are optional:",
        ssm_ContactsRotationRecurrence_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "startTime",
        "The date and time, in RFC 3339 format, that the rotation goes into effect.",
        [],
        false,
        false,
      ),
    ];
  }
}
