import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail {
  /*
The time at which the MembershipRole will expire.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.

Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  ExpireTime?: string;
}

export function Cloudidentity_getGroupMembershipsMembershipRoleExpiryDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExpireTime",
      'The time at which the MembershipRole will expire.\n\nA timestamp in RFC3339 UTC "Zulu" format, with nanosecond\nresolution and up to nine fractional digits.\n\nExamples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".',
      [],
      true,
      false,
    ),
  ];
}
