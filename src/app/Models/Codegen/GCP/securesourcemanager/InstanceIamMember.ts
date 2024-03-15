import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceIAMMemberCondition } from "../types/InstanceIAMMemberCondition";

export interface InstanceIAMMemberArgs {
  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: InstanceIAMMemberCondition;

  //
  InstanceId?: string;

  //
  Location?: string;

  //
  Member?: string;
}
export class InstanceIAMMember extends Resource {
  //
  public Etag?: string;

  //
  public InstanceId?: string;

  //
  public Location?: string;

  //
  public Member?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: InstanceIAMMemberCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "InstanceId", ""),
    ];
  }
}
