import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securitycenter_SourceIamMemberCondition,
  securitycenter_SourceIamMemberCondition_GetTypes,
} from "../types/securitycenter_SourceIamMemberCondition";

export interface SourceIamMemberArgs {
  //
  member?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  organization?: string;

  //
  role?: string;

  //
  source?: string;

  //
  condition?: securitycenter_SourceIamMemberCondition;
}
export class SourceIamMember extends Resource {
  //
  public condition?: securitycenter_SourceIamMemberCondition;

  //
  public etag?: string;

  //
  public member?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public organization?: string;

  //
  public role?: string;

  //
  public source?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(InputType.String, "source", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        securitycenter_SourceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
