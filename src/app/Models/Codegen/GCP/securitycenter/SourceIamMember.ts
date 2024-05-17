import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_SourceIamMemberCondition,
  Securitycenter_SourceIamMemberCondition_GetTypes,
} from "../types/Securitycenter_SourceIamMemberCondition";

export interface SourceIamMemberArgs {
  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  Organization?: string;

  //
  Role?: string;

  //
  Source?: string;

  //
  Condition?: Securitycenter_SourceIamMemberCondition;

  //
  Member?: string;
}
export class SourceIamMember extends Resource {
  //
  public Member?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public Organization?: string;

  //
  public Role?: string;

  //
  public Source?: string;

  //
  public Condition?: Securitycenter_SourceIamMemberCondition;

  //
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(InputType.String, "Source", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Securitycenter_SourceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
    ];
  }
}
