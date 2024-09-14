import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  clouddeploy_DeliveryPipelineIamBindingCondition,
  clouddeploy_DeliveryPipelineIamBindingCondition_GetTypes,
} from "../types/clouddeploy_DeliveryPipelineIamBindingCondition";

export interface DeliveryPipelineIamBindingArgs {
  //
  condition?: clouddeploy_DeliveryPipelineIamBindingCondition;

  //
  location?: string;

  //
  members?: Array<string>;

  //
  name?: string;

  //
  project?: string;

  //
  role?: string;
}
export class DeliveryPipelineIamBinding extends DS_Resource {
  //
  public condition?: clouddeploy_DeliveryPipelineIamBindingCondition;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public members?: Array<string>;

  //
  public name?: string;

  //
  public project?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        () => clouddeploy_DeliveryPipelineIamBindingCondition_GetTypes(),
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
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "name", "", () => [], false, true),
      new DynamicUIProps(
        InputType.String,
        "project",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "role", "", () => [], true, true),
    ];
  }
}
