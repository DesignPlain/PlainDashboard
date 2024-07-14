import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getForwardingRuleServiceDirectoryRegistration {
  // Service Directory namespace to register the forwarding rule under.
  namespace?: string;

  // Service Directory service to register the forwarding rule under.
  service?: string;
}

export function compute_getForwardingRuleServiceDirectoryRegistration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Service Directory namespace to register the forwarding rule under.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Service Directory service to register the forwarding rule under.",
      [],
      true,
      false,
    ),
  ];
}
