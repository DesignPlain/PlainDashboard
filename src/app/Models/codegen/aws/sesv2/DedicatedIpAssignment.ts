import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DedicatedIpAssignmentArgs {
  // Dedicated IP address.
  destinationPoolName?: string;

  // Dedicated IP address.
  ip?: string;
}
export class DedicatedIpAssignment extends DS_Resource {
  // Dedicated IP address.
  public destinationPoolName?: string;

  // Dedicated IP address.
  public ip?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destinationPoolName",
        "Dedicated IP address.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ip",
        "Dedicated IP address.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
