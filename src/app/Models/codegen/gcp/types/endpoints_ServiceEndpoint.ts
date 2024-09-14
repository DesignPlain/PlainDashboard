import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface endpoints_ServiceEndpoint {
  // The FQDN of the endpoint as described in the config.
  address?: string;

  // The simple name of the endpoint as described in the config.
  name?: string;
}

export function endpoints_ServiceEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "The FQDN of the endpoint as described in the config.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The simple name of the endpoint as described in the config.",
      () => [],
      false,
      false,
    ),
  ];
}
