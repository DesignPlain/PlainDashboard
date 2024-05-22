import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DedicatedIpAssignmentArgs {
  // Dedicated IP address.
  destinationPoolName?: string;

  // Dedicated IP address.
  ip?: string;
}
export class DedicatedIpAssignment extends Resource {
  // Dedicated IP address.
  public ip?: string;

  // Dedicated IP address.
  public destinationPoolName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destinationPoolName",
        "Dedicated IP address.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ip",
        "Dedicated IP address.",
        [],
        true,
        true,
      ),
    ];
  }
}
