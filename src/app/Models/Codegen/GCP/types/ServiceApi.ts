import { ServiceApiMethod } from "./ServiceApiMethod";

export interface ServiceApi {
  // A list of Method objects; structure is documented below.
  Methods?: Array<ServiceApiMethod>;

  // The simple name of the endpoint as described in the config.
  Name?: string;

  // `SYNTAX_PROTO2` or `SYNTAX_PROTO3`.
  Syntax?: string;

  // A version string for this api. If specified, will have the form major-version.minor-version, e.g. `1.10`.
  Version?: string;
}
