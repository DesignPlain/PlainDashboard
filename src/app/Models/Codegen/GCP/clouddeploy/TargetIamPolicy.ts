import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TargetIamPolicyArgs {
  //
  Location?: string;

  //
  Name?: string;

  //
  PolicyData?: string;

  //
  Project?: string;
}
export class TargetIamPolicy extends Resource {
  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Name?: string;

  //
  public PolicyData?: string;

  //
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "PolicyData", "", [], true, false),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
      new DynamicUIProps(InputType.String, "Name", "", [], false, true),
    ];
  }
}
