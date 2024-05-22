import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration {
  // The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.
  fromPort?: number;

  // The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either `"TCP"` or `"UDP"`.
  protocols?: Array<string>;

  // The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.
  toPort?: number;
}

export function globalaccelerator_CustomRoutingEndpointGroupDestinationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "toPort",
      "The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "fromPort",
      "The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "protocols",
      'The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either `"TCP"` or `"UDP"`.',
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
