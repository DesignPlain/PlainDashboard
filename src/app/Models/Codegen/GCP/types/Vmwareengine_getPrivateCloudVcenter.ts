import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_getPrivateCloudVcenter {
  // State of the appliance. Possible values: ["ACTIVE", "CREATING"]
  State?: string;

  // Version of the appliance.
  Version?: string;

  // Fully qualified domain name of the appliance.
  Fqdn?: string;

  // Internal IP address of the appliance.
  InternalIp?: string;
}

export function Vmwareengine_getPrivateCloudVcenter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      'State of the appliance. Possible values: ["ACTIVE", "CREATING"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Version of the appliance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Fqdn",
      "Fully qualified domain name of the appliance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InternalIp",
      "Internal IP address of the appliance.",
      [],
      true,
      false,
    ),
  ];
}
