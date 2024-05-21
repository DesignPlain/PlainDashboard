import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vmwareengine_getPrivateCloudVcenter {
  // Fully qualified domain name of the appliance.
  fqdn?: string;

  // Internal IP address of the appliance.
  internalIp?: string;

  // State of the appliance. Possible values: ["ACTIVE", "CREATING"]
  state?: string;

  // Version of the appliance.
  version?: string;
}

export function vmwareengine_getPrivateCloudVcenter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fqdn",
      "Fully qualified domain name of the appliance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "internalIp",
      "Internal IP address of the appliance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      'State of the appliance. Possible values: ["ACTIVE", "CREATING"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Version of the appliance.",
      [],
      true,
      false,
    ),
  ];
}
