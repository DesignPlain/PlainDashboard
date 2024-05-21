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
  organization?: string;

  //
  policyData?: string;

  //
  source?: string;
}
export class SourceIamPolicy extends Resource {
  //
  public etag?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  public organization?: string;

  //
  public policyData?: string;

  //
  public source?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "policyData", "", [], true, false),
      new DynamicUIProps(InputType.String, "source", "", [], true, true),
    ];
  }
}
