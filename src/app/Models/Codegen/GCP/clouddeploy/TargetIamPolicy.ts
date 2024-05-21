import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TargetIamPolicyArgs {
  //
  project?: string;

  //
  location?: string;

  //
  name?: string;

  //
  policyData?: string;
}
export class TargetIamPolicy extends Resource {
  //
  public policyData?: string;

  //
  public project?: string;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(InputType.String, "name", "", [], false, true),
      new DynamicUIProps(InputType.String, "policyData", "", [], true, false),
    ];
  }
}
