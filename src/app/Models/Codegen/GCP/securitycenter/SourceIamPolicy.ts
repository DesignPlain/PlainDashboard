import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SourceIamPolicyArgs {
  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  Organization?: string;

  //
  PolicyData?: string;

  //
  Source?: string;
}
export class SourceIamPolicy extends Resource {
  //
  public Source?: string;

  //
  public Etag?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public Organization?: string;

  //
  public PolicyData?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Source", ""),
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
      ),
      new DynamicUIProps(InputType.String, "PolicyData", ""),
    ];
  }
}
