import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_SourceIamBindingCondition,
  Securitycenter_SourceIamBindingCondition_GetTypes,
} from "../types/Securitycenter_SourceIamBindingCondition";

export interface SourceIamBindingArgs {
  //
  Role?: string;

  //
  Source?: string;

  //
  Condition?: Securitycenter_SourceIamBindingCondition;

  //
  Members?: Array<string>;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  Organization?: string;
}
export class SourceIamBinding extends Resource {
  //
  public Role?: string;

  //
  public Source?: string;

  //
  public Condition?: Securitycenter_SourceIamBindingCondition;

  //
  public Etag?: string;

  //
  public Members?: Array<string>;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public Organization?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(InputType.String, "Source", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Securitycenter_SourceIamBindingCondition_GetTypes(),
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
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
