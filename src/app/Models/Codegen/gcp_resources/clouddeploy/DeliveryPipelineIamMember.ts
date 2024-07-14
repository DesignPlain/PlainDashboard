import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineIamMemberCondition,
  clouddeploy_DeliveryPipelineIamMemberCondition_GetTypes,
} from "../types/clouddeploy_DeliveryPipelineIamMemberCondition";

export interface DeliveryPipelineIamMemberArgs {
  //
  project?: string;

  //
  role?: string;

  //
  condition?: clouddeploy_DeliveryPipelineIamMemberCondition;

  //
  location?: string;

  //
  member?: string;

  //
  name?: string;
}
export class DeliveryPipelineIamMember extends Resource {
  //
  public name?: string;

  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: clouddeploy_DeliveryPipelineIamMemberCondition;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public member?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        clouddeploy_DeliveryPipelineIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(InputType.String, "name", "", [], false, true),
    ];
  }
}
