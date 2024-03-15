import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { SourceIAMMemberCondition } from "../types/SourceIAMMemberCondition";

export interface SourceIAMMemberArgs {
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
  Condition?: SourceIAMMemberCondition;

  //
  Member?: string;
}
export class SourceIAMMember extends Resource {
  //
  public Source?: string;

  //
  public Condition?: SourceIAMMemberCondition;

  //
  public Etag?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Source", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "Member", ""),
    ];
  }
}
