import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ModelPackageGroupPolicyArgs {
  // The name of the model package group.
  modelPackageGroupName?: string;

  //
  resourcePolicy?: string;
}
export class ModelPackageGroupPolicy extends DS_Resource {
  // The name of the model package group.
  public modelPackageGroupName?: string;

  //
  public resourcePolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourcePolicy",
        "",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "modelPackageGroupName",
        "The name of the model package group.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
