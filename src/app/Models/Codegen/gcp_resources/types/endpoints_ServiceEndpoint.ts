import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface endpoints_ServiceEndpoint {
  // The simple name of the endpoint as described in the config.
  name?: string;

  // The FQDN of the endpoint as described in the config.
  address?: string;
}

export function endpoints_ServiceEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The simple name of the endpoint as described in the config.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address",
      "The FQDN of the endpoint as described in the config.",
      [],
      false,
      false,
    ),
  ];
}
