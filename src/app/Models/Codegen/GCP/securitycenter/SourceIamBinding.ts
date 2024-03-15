import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { SourceIAMBindingCondition } from "../types/SourceIAMBindingCondition";

export interface SourceIAMBindingArgs {
  //
  Condition?: SourceIAMBindingCondition;

  //
  Members?: Array<string>;

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
}
export class SourceIAMBinding extends Resource {
  //
  public Source?: string;

  //
  public Condition?: SourceIAMBindingCondition;

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

  //
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Source", ""),
    ];
  }
}
