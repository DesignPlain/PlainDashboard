import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_getGlobalForwardingRuleServiceDirectoryRegistration {
  // Service Directory namespace to register the forwarding rule under.
  namespace?: string;

  /*
[Optional] Service Directory region to register this global forwarding rule under.
Default to "us-central1". Only used for PSC for Google APIs. All PSC for
Google APIs Forwarding Rules on the same network should use the same Service
Directory region.
*/
  serviceDirectoryRegion?: string;
}

export function compute_getGlobalForwardingRuleServiceDirectoryRegistration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Service Directory namespace to register the forwarding rule under.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceDirectoryRegion",
      '[Optional] Service Directory region to register this global forwarding rule under.\nDefault to "us-central1". Only used for PSC for Google APIs. All PSC for\nGoogle APIs Forwarding Rules on the same network should use the same Service\nDirectory region.',
      () => [],
      true,
      false,
    ),
  ];
}
