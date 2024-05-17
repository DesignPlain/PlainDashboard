import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataform_RepositoryIamBindingCondition,
  Dataform_RepositoryIamBindingCondition_GetTypes,
} from "../types/Dataform_RepositoryIamBindingCondition";

export interface RepositoryIamBindingArgs {
  //
  Region?: string;

  //
  Repository?: string;

  //
  Role?: string;

  //
  Condition?: Dataform_RepositoryIamBindingCondition;

  //
  Members?: Array<string>;

  //
  Project?: string;
}
export class RepositoryIamBinding extends Resource {
  //
  public Region?: string;

  //
  public Repository?: string;

  //
  public Role?: string;

  //
  public Condition?: Dataform_RepositoryIamBindingCondition;

  //
  public Etag?: string;

  //
  public Members?: Array<string>;

  //
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Region", "", [], false, true),
      new DynamicUIProps(InputType.String, "Repository", "", [], true, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Dataform_RepositoryIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
