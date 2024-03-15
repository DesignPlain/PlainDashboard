import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AddressGroupIAMBindingCondition } from "../types/AddressGroupIAMBindingCondition";

export interface AddressGroupIAMBindingArgs {
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

  //
  Condition?: AddressGroupIAMBindingCondition;
}
export class AddressGroupIAMBinding extends Resource {
  //
  public Members?: Array<string>;

  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: AddressGroupIAMBindingCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(InputType.String, "Name", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
    ];
  }
}
