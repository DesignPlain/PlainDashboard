import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DeliveryPipelineIamPolicyArgs {
  //
  project?: string;

  //
  location?: string;

  //
  name?: string;

  //
  policyData?: string;
}
export class DeliveryPipelineIamPolicy extends DS_Resource {
  //
  public project?: string;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public name?: string;

  //
  public policyData?: string;

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
        "location",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "name", "", () => [], false, true),
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
