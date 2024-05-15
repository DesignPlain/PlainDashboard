import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_NetworkPolicyExternalIp {
  // True if the service is enabled; false otherwise.
  Enabled?: boolean;

  /*
(Output)
State of the service. New values may be added to this enum when appropriate.
*/
  State?: string;
}

export function Vmwareengine_NetworkPolicyExternalIp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "True if the service is enabled; false otherwise.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nState of the service. New values may be added to this enum when appropriate.",
      [],
      false,
      false,
    ),
  ];
}
