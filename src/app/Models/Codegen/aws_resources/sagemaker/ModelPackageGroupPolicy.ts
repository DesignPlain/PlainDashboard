import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ModelPackageGroupPolicyArgs {
  // The name of the model package group.
  modelPackageGroupName?: string;

  //
  resourcePolicy?: string;
}
export class ModelPackageGroupPolicy extends Resource {
  // The name of the model package group.
  public modelPackageGroupName?: string;

  //
  public resourcePolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "modelPackageGroupName",
        "The name of the model package group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourcePolicy",
        "",
        [],
        true,
        false,
      ),
    ];
  }
}
