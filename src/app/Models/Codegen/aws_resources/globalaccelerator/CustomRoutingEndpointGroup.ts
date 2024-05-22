import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration,
  globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration_GetTypes,
} from "../types/globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration";
import {
  globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration,
  globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration_GetTypes,
} from "../types/globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration";

export interface CustomRoutingEndpointGroupArgs {
  // The Amazon Resource Name (ARN) of the custom routing listener.
  listenerArn?: string;

  // The port ranges and protocols for all endpoints in a custom routing endpoint group to accept client traffic on. Fields documented below.
  destinationConfigurations?: Array<globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration>;

  // The list of endpoint objects. Fields documented below.
  endpointConfigurations?: Array<globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration>;

  // The name of the AWS Region where the custom routing endpoint group is located.
  endpointGroupRegion?: string;
}
export class CustomRoutingEndpointGroup extends Resource {
  // The Amazon Resource Name (ARN) of the custom routing endpoint group.
  public arn?: string;

  // The port ranges and protocols for all endpoints in a custom routing endpoint group to accept client traffic on. Fields documented below.
  public destinationConfigurations?: Array<globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration>;

  // The list of endpoint objects. Fields documented below.
  public endpointConfigurations?: Array<globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration>;

  // The name of the AWS Region where the custom routing endpoint group is located.
  public endpointGroupRegion?: string;

  // The Amazon Resource Name (ARN) of the custom routing listener.
  public listenerArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "listenerArn",
        "The Amazon Resource Name (ARN) of the custom routing listener.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinationConfigurations",
        "The port ranges and protocols for all endpoints in a custom routing endpoint group to accept client traffic on. Fields documented below.",
        globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "endpointConfigurations",
        "The list of endpoint objects. Fields documented below.",
        globalaccelerator_CustomRoutingEndpointGroupEndpointConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointGroupRegion",
        "The name of the AWS Region where the custom routing endpoint group is located.",
        [],
        false,
        true,
      ),
    ];
  }
}
