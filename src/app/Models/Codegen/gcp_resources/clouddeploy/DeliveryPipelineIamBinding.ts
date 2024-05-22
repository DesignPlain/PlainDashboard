import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_DeliveryPipelineIamBindingCondition,
  clouddeploy_DeliveryPipelineIamBindingCondition_GetTypes,
} from "../types/clouddeploy_DeliveryPipelineIamBindingCondition";

export interface DeliveryPipelineIamBindingArgs {
  //
  name?: string;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: clouddeploy_DeliveryPipelineIamBindingCondition;

  //
  location?: string;

  //
  members?: Array<string>;
}
export class DeliveryPipelineIamBinding extends Resource {
  //
  public role?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "name", "", [], false, true),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        clouddeploy_DeliveryPipelineIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
    ];
  }
}
