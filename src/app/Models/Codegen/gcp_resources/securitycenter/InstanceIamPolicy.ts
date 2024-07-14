import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface InstanceIamPolicyArgs {
  // The region of the Data Fusion instance.
  region?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  name?: string;

  //
  policyData?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class InstanceIamPolicy extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of the Data Fusion instance.
  public region?: string;

  //
  public etag?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  public name?: string;

  //
  public policyData?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the instance or a fully qualified identifier for the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "policyData", "", [], true, false),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region of the Data Fusion instance.",
        [],
        false,
        true,
      ),
    ];
  }
}
