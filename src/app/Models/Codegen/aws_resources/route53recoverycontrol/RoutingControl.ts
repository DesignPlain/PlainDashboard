import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface RoutingControlArgs {
  // ARN of the cluster in which this routing control will reside.
  clusterArn?: string;

  // ARN of the control panel in which this routing control will reside.
  controlPanelArn?: string;

  /*
The name describing the routing control.

The following arguments are optional:
*/
  name?: string;
}
export class RoutingControl extends Resource {
  /*
The name describing the routing control.

The following arguments are optional:
*/
  public name?: string;

  // Status of routing control. `PENDING` when it is being created/updated, `PENDING_DELETION` when it is being deleted, and `DEPLOYED` otherwise.
  public status?: string;

  // ARN of the routing control.
  public arn?: string;

  // ARN of the cluster in which this routing control will reside.
  public clusterArn?: string;

  // ARN of the control panel in which this routing control will reside.
  public controlPanelArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "clusterArn",
        "ARN of the cluster in which this routing control will reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "controlPanelArn",
        "ARN of the control panel in which this routing control will reside.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name describing the routing control.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
    ];
  }
}
