import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SharedVPCHostProjectArgs {
  // The ID of the project that will serve as a Shared VPC host project
  project?: string;
}
export class SharedVPCHostProject extends Resource {
  // The ID of the project that will serve as a Shared VPC host project
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project that will serve as a Shared VPC host project",
        [],
        true,
        true,
      ),
    ];
  }
}
