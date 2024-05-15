import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Endpoints_ServiceApiMethod {
  // The simple name of the endpoint as described in the config.
  Name?: string;

  // The type URL for the request to this API.
  RequestType?: string;

  // The type URL for the response from this API.
  ResponseType?: string;

  // `SYNTAX_PROTO2` or `SYNTAX_PROTO3`.
  Syntax?: string;
}

export function Endpoints_ServiceApiMethod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Syntax",
      "`SYNTAX_PROTO2` or `SYNTAX_PROTO3`.",
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
    new DynamicUIProps(
      InputType.String,
      "RequestType",
      "The type URL for the request to this API.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ResponseType",
      "The type URL for the response from this API.",
      [],
      false,
      false,
    ),
  ];
}
