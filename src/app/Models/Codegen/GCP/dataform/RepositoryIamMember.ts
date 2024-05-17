import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataform_RepositoryIamMemberCondition,
  Dataform_RepositoryIamMemberCondition_GetTypes,
} from "../types/Dataform_RepositoryIamMemberCondition";

export interface RepositoryIamMemberArgs {
  //
  Project?: string;

  //
  Region?: string;

  //
  Repository?: string;

  //
  Role?: string;

  //
  Condition?: Dataform_RepositoryIamMemberCondition;

  //
  Member?: string;
}
export class RepositoryIamMember extends Resource {
  //
  public Condition?: Dataform_RepositoryIamMemberCondition;

  //
  public Etag?: string;

  //
  public Member?: string;

  //
  public Project?: string;

  //
  public Region?: string;

  //
  public Repository?: string;

  //
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Dataform_RepositoryIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Region", "", [], false, true),
      new DynamicUIProps(InputType.String, "Repository", "", [], true, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
    ];
  }
}
