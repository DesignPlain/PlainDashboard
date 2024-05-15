import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineIamMemberCondition,
  Clouddeploy_DeliveryPipelineIamMemberCondition_GetTypes,
} from "../types/Clouddeploy_DeliveryPipelineIamMemberCondition";

export interface DeliveryPipelineIamMemberArgs {
  //
  Name?: string;

  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: Clouddeploy_DeliveryPipelineIamMemberCondition;

  //
  Location?: string;

  //
  Member?: string;
}
export class DeliveryPipelineIamMember extends Resource {
  //
  public Condition?: Clouddeploy_DeliveryPipelineIamMemberCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Member?: string;

  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Name", "", [], false, true),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Clouddeploy_DeliveryPipelineIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
    ];
  }
}
