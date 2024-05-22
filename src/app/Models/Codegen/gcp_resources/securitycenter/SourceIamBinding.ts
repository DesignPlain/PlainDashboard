import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securitycenter_SourceIamBindingCondition,
  securitycenter_SourceIamBindingCondition_GetTypes,
} from "../types/securitycenter_SourceIamBindingCondition";

export interface SourceIamBindingArgs {
  //
  condition?: securitycenter_SourceIamBindingCondition;

  //
  members?: Array<string>;

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
}
export class SourceIamBinding extends Resource {
  //
  public role?: string;

  //
  public source?: string;

  //
  public condition?: securitycenter_SourceIamBindingCondition;

  //
  public etag?: string;

  //
  public members?: Array<string>;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public organization?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        securitycenter_SourceIamBindingCondition_GetTypes(),
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
    ];
  }
}
