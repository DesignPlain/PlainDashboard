import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_GlobalForwardingRuleServiceDirectoryRegistrations {
  /*
[Optional] Service Directory region to register this global forwarding rule under.
Default to "us-central1". Only used for PSC for Google APIs. All PSC for
Google APIs Forwarding Rules on the same network should use the same Service
Directory region.
*/
  ServiceDirectoryRegion?: string;

  // Service Directory namespace to register the forwarding rule under.
  Namespace?: string;
}

export function Compute_GlobalForwardingRuleServiceDirectoryRegistrations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServiceDirectoryRegion",
      '[Optional] Service Directory region to register this global forwarding rule under.\nDefault to "us-central1". Only used for PSC for Google APIs. All PSC for\nGoogle APIs Forwarding Rules on the same network should use the same Service\nDirectory region.',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Namespace",
      "Service Directory namespace to register the forwarding rule under.",
      [],
      false,
      true,
    ),
  ];
}
