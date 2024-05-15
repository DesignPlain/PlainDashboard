import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vmwareengine_PrivateCloudVcenter {
  // Fully qualified domain name of the appliance.
  Fqdn?: string;

  // Internal IP address of the appliance.
  InternalIp?: string;

  /*
State of the appliance.
Possible values are: `ACTIVE`, `CREATING`.
*/
  State?: string;

  // Version of the appliance.
  Version?: string;
}

export function Vmwareengine_PrivateCloudVcenter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Fqdn",
      "Fully qualified domain name of the appliance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InternalIp",
      "Internal IP address of the appliance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "State of the appliance.\nPossible values are: `ACTIVE`, `CREATING`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Version",
      "Version of the appliance.",
      [],
      false,
      false,
    ),
  ];
}
