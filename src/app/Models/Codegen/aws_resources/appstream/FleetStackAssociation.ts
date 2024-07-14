import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface FleetStackAssociationArgs {
  // Name of the fleet.
  fleetName?: string;

  // Name of the stack.
  stackName?: string;
}
export class FleetStackAssociation extends Resource {
  // Name of the fleet.
  public fleetName?: string;

  // Name of the stack.
  public stackName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "fleetName",
        "Name of the fleet.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackName",
        "Name of the stack.",
        [],
        true,
        true,
      ),
    ];
  }
}
