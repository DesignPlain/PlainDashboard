import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RepositoryIamPolicyArgs {
  //
  region?: string;

  //
  repository?: string;

  //
  policyData?: string;

  //
  project?: string;
}
export class RepositoryIamPolicy extends Resource {
  //
  public etag?: string;

  //
  public policyData?: string;

  //
  public project?: string;

  //
  public region?: string;

  //
  public repository?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "region", "", [], false, true),
      new DynamicUIProps(InputType.String, "repository", "", [], true, true),
      new DynamicUIProps(InputType.String, "policyData", "", [], true, false),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
    ];
  }
}
