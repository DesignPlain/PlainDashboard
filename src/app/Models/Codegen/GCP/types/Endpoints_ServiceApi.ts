import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Endpoints_ServiceApiMethod,
  Endpoints_ServiceApiMethod_GetTypes,
} from "./Endpoints_ServiceApiMethod";

export interface Endpoints_ServiceApi {
  // A list of Method objects; structure is documented below.
  Methods?: Array<Endpoints_ServiceApiMethod>;

  // The simple name of the endpoint as described in the config.
  Name?: string;

  // `SYNTAX_PROTO2` or `SYNTAX_PROTO3`.
  Syntax?: string;

  // A version string for this api. If specified, will have the form major-version.minor-version, e.g. `1.10`.
  Version?: string;
}

export function Endpoints_ServiceApi_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Version",
      "A version string for this api. If specified, will have the form major-version.minor-version, e.g. `1.10`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Methods",
      "A list of Method objects; structure is documented below.",
      Endpoints_ServiceApiMethod_GetTypes(),
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
      "Syntax",
      "`SYNTAX_PROTO2` or `SYNTAX_PROTO3`.",
      [],
      false,
      false,
    ),
  ];
}
