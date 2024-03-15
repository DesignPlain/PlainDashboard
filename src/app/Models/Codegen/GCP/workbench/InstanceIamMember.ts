import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceIAMMemberCondition } from "../types/InstanceIAMMemberCondition";

export interface InstanceIAMMemberArgs {
  //
  Condition?: InstanceIAMMemberCondition;

  //
  Location?: string;

  //
  Member?: string;

  //
  Name?: string;

  //
  Project?: string;

  //
  Role?: string;
}
export class InstanceIAMMember extends Resource {
  //
  public Role?: string;

  //
  public Condition?: InstanceIAMMemberCondition;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(InputType.String, "Name", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
    ];
  }
}
