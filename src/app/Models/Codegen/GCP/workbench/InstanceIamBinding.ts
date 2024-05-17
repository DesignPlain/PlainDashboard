import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workbench_InstanceIamBindingCondition,
  Workbench_InstanceIamBindingCondition_GetTypes,
} from "../types/Workbench_InstanceIamBindingCondition";

export interface InstanceIamBindingArgs {
  //
  Condition?: Workbench_InstanceIamBindingCondition;

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
export class InstanceIamBinding extends Resource {
  //
  public Members?: Array<string>;

  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: Workbench_InstanceIamBindingCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
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
        Workbench_InstanceIamBindingCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
