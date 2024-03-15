import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TargetIAMMemberCondition } from "../types/TargetIAMMemberCondition";

export interface TargetIAMMemberArgs {
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

  //
  Condition?: TargetIAMMemberCondition;
}
export class TargetIAMMember extends Resource {
  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: TargetIAMMemberCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Member?: string;

  //
  public Name?: string;

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
