import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DeliveryPipelineIAMBindingCondition } from "../types/DeliveryPipelineIAMBindingCondition";

export interface DeliveryPipelineIAMBindingArgs {
  //
  Role?: string;

  //
  Condition?: DeliveryPipelineIAMBindingCondition;

  //
  Location?: string;

  //
  Members?: Array<string>;

  //
  Name?: string;

  //
  Project?: string;
}
export class DeliveryPipelineIAMBinding extends Resource {
  //
  public Condition?: DeliveryPipelineIAMBindingCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Members?: Array<string>;

  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(InputType.String, "Name", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
    ];
  }
}
