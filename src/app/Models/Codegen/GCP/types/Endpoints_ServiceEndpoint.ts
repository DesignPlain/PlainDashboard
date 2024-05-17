import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Endpoints_ServiceEndpoint {
  // The FQDN of the endpoint as described in the config.
  Address?: string;

  // The simple name of the endpoint as described in the config.
  Name?: string;
}

export function Endpoints_ServiceEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Address",
      "The FQDN of the endpoint as described in the config.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The simple name of the endpoint as described in the config.",
      [],
      false,
      false,
    ),
  ];
}
