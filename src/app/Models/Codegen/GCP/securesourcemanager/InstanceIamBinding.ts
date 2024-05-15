import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securesourcemanager_InstanceIamBindingCondition,
  Securesourcemanager_InstanceIamBindingCondition_GetTypes,
} from "../types/Securesourcemanager_InstanceIamBindingCondition";

export interface InstanceIamBindingArgs {
  //
  Condition?: Securesourcemanager_InstanceIamBindingCondition;

  //
  InstanceId?: string;

  //
  Location?: string;

  //
  Members?: Array<string>;

  //
  Project?: string;

  //
  Role?: string;
}
export class InstanceIamBinding extends Resource {
  //
  public Role?: string;

  //
  public Condition?: Securesourcemanager_InstanceIamBindingCondition;

  //
  public Etag?: string;

  //
  public InstanceId?: string;

  //
  public Location?: string;

  //
  public Members?: Array<string>;

  //
  public Project?: string;

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
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Securesourcemanager_InstanceIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "InstanceId", "", [], true, true),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
    ];
  }
}
