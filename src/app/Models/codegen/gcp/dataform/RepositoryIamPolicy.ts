import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RepositoryIamPolicyArgs {
  //
  project?: string;

  //
  region?: string;

  //
  repository?: string;

  //
  policyData?: string;
}
export class RepositoryIamPolicy extends DS_Resource {
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
      new DynamicUIProps(
        InputType.String,
        "project",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "region", "", () => [], false, true),
      new DynamicUIProps(
        InputType.String,
        "repository",
        "",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyData",
        "",
        () => [],
        true,
        false,
      ),
    ];
  }
}
