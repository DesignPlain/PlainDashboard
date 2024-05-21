import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataform_RepositoryIamMemberCondition,
  dataform_RepositoryIamMemberCondition_GetTypes,
} from "../types/dataform_RepositoryIamMemberCondition";

export interface RepositoryIamMemberArgs {
  //
  region?: string;

  //
  repository?: string;

  //
  role?: string;

  //
  condition?: dataform_RepositoryIamMemberCondition;

  //
  member?: string;

  //
  project?: string;
}
export class RepositoryIamMember extends Resource {
  //
  public etag?: string;

  //
  public member?: string;

  //
  public project?: string;

  //
  public region?: string;

  //
  public repository?: string;

  //
  public role?: string;

  //
  public condition?: dataform_RepositoryIamMemberCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "region", "", [], false, true),
      new DynamicUIProps(InputType.String, "repository", "", [], true, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        dataform_RepositoryIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
    ];
  }
}
