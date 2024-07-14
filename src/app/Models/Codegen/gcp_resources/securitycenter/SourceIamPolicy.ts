import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SourceIamPolicyArgs {
  //
  source?: string;

  /*
The organization whose Cloud Security Command Center the Source
lives in.


- - -
*/
  organization?: string;

  //
  policyData?: string;
}
export class SourceIamPolicy extends Resource {
  //
  public source?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "source", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "organization",
        "The organization whose Cloud Security Command Center the Source\nlives in.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "policyData", "", [], true, false),
    ];
  }
}
