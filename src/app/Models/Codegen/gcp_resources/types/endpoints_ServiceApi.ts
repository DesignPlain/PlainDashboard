import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  endpoints_ServiceApiMethod,
  endpoints_ServiceApiMethod_GetTypes,
} from "./endpoints_ServiceApiMethod";

export interface endpoints_ServiceApi {
  // The simple name of the endpoint as described in the config.
  name?: string;

  // `SYNTAX_PROTO2` or `SYNTAX_PROTO3`.
  syntax?: string;

  // A version string for this api. If specified, will have the form major-version.minor-version, e.g. `1.10`.
  version?: string;

  // A list of Method objects; structure is documented below.
  methods?: Array<endpoints_ServiceApiMethod>;
}

export function endpoints_ServiceApi_GetTypes(): DynamicUIProps[] {
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
      "syntax",
      "`SYNTAX_PROTO2` or `SYNTAX_PROTO3`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "A version string for this api. If specified, will have the form major-version.minor-version, e.g. `1.10`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "methods",
      "A list of Method objects; structure is documented below.",
      endpoints_ServiceApiMethod_GetTypes(),
      false,
      false,
    ),
  ];
}
