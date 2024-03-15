import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DeliveryPipelineIAMMemberCondition } from "../types/DeliveryPipelineIAMMemberCondition";

export interface DeliveryPipelineIAMMemberArgs {
  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: DeliveryPipelineIAMMemberCondition;

  //
  Location?: string;

  //
  Member?: string;

  //
  Name?: string;
}
export class DeliveryPipelineIAMMember extends Resource {
  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: DeliveryPipelineIAMMemberCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Member?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(InputType.String, "Name", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
    ];
  }
}
