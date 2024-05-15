import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineIamBindingCondition,
  Clouddeploy_DeliveryPipelineIamBindingCondition_GetTypes,
} from "../types/Clouddeploy_DeliveryPipelineIamBindingCondition";

export interface DeliveryPipelineIamBindingArgs {
  //
  Condition?: Clouddeploy_DeliveryPipelineIamBindingCondition;

  //
  Location?: string;

  //
  Members?: Array<string>;

  //
  Name?: string;

  //
  Project?: string;

  //
  Role?: string;
}
export class DeliveryPipelineIamBinding extends Resource {
  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: Clouddeploy_DeliveryPipelineIamBindingCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Members?: Array<string>;

  //
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "Name", "", [], false, true),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Clouddeploy_DeliveryPipelineIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
    ];
  }
}
