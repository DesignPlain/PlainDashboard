import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getForwardingRuleServiceDirectoryRegistration {
  // Service Directory namespace to register the forwarding rule under.
  Namespace?: string;

  // Service Directory service to register the forwarding rule under.
  Service?: string;
}

export function Compute_getForwardingRuleServiceDirectoryRegistration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Service",
      "Service Directory service to register the forwarding rule under.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Namespace",
      "Service Directory namespace to register the forwarding rule under.",
      [],
      true,
      false,
    ),
  ];
}
