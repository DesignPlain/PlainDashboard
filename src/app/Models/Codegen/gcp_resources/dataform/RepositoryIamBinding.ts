import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataform_RepositoryIamBindingCondition,
  dataform_RepositoryIamBindingCondition_GetTypes,
} from "../types/dataform_RepositoryIamBindingCondition";

export interface RepositoryIamBindingArgs {
  //
  role?: string;

  //
  condition?: dataform_RepositoryIamBindingCondition;

  //
  members?: Array<string>;

  //
  project?: string;

  //
  region?: string;

  //
  repository?: string;
}
export class RepositoryIamBinding extends Resource {
  //
  public members?: Array<string>;

  //
  public project?: string;

  //
  public region?: string;

  //
  public repository?: string;

  //
  public role?: string;

  //
  public condition?: dataform_RepositoryIamBindingCondition;

  //
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        dataform_RepositoryIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "region", "", [], false, true),
      new DynamicUIProps(InputType.String, "repository", "", [], true, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
    ];
  }
}
