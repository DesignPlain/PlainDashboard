import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_ServiceConnectionPolicyPscConfig {
  // Max number of PSC connections for this policy.
  Limit?: string;

  // IDs of the subnetworks or fully qualified identifiers for the subnetworks
  Subnetworks?: Array<string>;
}

export function Networkconnectivity_ServiceConnectionPolicyPscConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Limit",
      "Max number of PSC connections for this policy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Subnetworks",
      "IDs of the subnetworks or fully qualified identifiers for the subnetworks",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
