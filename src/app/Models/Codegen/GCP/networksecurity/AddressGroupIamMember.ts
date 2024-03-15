import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AddressGroupIAMMemberCondition } from "../types/AddressGroupIAMMemberCondition";

export interface AddressGroupIAMMemberArgs {
  //
  Name?: string;

  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: AddressGroupIAMMemberCondition;

  //
  Location?: string;

  //
  Member?: string;
}
export class AddressGroupIAMMember extends Resource {
  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: AddressGroupIAMMemberCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Member?: string;

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
