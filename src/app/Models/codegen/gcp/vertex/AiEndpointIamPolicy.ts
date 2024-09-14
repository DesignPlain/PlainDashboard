import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AiEndpointIamPolicyArgs {
  //
  policyData?: string;

  //
  project?: string;

  //
  endpoint?: string;

  //
  location?: string;
}
export class AiEndpointIamPolicy extends DS_Resource {
  //
  public endpoint?: string;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public policyData?: string;

  //
  public project?: string;

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
      new DynamicUIProps(
        InputType.String,
        "endpoint",
        "",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "",
        () => [],
        false,
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
