import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_InstanceIamBindingCondition,
  Securitycenter_InstanceIamBindingCondition_GetTypes,
} from "../types/Securitycenter_InstanceIamBindingCondition";

export interface InstanceIamBindingArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the Data Fusion instance.
  Region?: string;

  //
  Role?: string;

  //
  Condition?: Securitycenter_InstanceIamBindingCondition;

  //
  Members?: Array<string>;

  // The ID of the instance or a fully qualified identifier for the instance.
  Name?: string;
}
export class InstanceIamBinding extends Resource {
  //
  public Condition?: Securitycenter_InstanceIamBindingCondition;

  //
  public Etag?: string;

  //
  public Members?: Array<string>;

  // The ID of the instance or a fully qualified identifier for the instance.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region of the Data Fusion instance.
  public Region?: string;

  //
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the instance or a fully qualified identifier for the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the Data Fusion instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Securitycenter_InstanceIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
