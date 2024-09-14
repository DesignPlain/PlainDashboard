import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
export class SourceIamBinding extends DS_Resource {
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

  //
  public condition?: securitycenter_SourceIamBindingCondition;

  //
  public etag?: string;

  //
  public members?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "role", "", () => [], true, true),
      new DynamicUIProps(InputType.String, "source", "", () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        () => securitycenter_SourceIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
