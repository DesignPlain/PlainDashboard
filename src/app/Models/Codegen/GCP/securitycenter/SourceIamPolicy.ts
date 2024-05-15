import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
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
  public Etag?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public Organization?: string;

  //
  public PolicyData?: string;

  //
  public Source?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "PolicyData", "", [], true, false),
      new DynamicUIProps(InputType.String, "Source", "", [], true, true),
    ];
  }
}
