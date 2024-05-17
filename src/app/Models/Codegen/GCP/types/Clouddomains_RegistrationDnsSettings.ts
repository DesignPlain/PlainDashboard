import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddomains_RegistrationDnsSettingsGlueRecord,
  Clouddomains_RegistrationDnsSettingsGlueRecord_GetTypes,
} from "./Clouddomains_RegistrationDnsSettingsGlueRecord";
import {
  Clouddomains_RegistrationDnsSettingsCustomDns,
  Clouddomains_RegistrationDnsSettingsCustomDns_GetTypes,
} from "./Clouddomains_RegistrationDnsSettingsCustomDns";

export interface Clouddomains_RegistrationDnsSettings {
  /*
Configuration for an arbitrary DNS provider.
Structure is documented below.
*/
  CustomDns?: Clouddomains_RegistrationDnsSettingsCustomDns;

  /*
The list of glue records for this Registration. Commonly empty.
Structure is documented below.
*/
  GlueRecords?: Array<Clouddomains_RegistrationDnsSettingsGlueRecord>;
}

export function Clouddomains_RegistrationDnsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CustomDns",
      "Configuration for an arbitrary DNS provider.\nStructure is documented below.",
      Clouddomains_RegistrationDnsSettingsCustomDns_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "GlueRecords",
      "The list of glue records for this Registration. Commonly empty.\nStructure is documented below.",
      Clouddomains_RegistrationDnsSettingsGlueRecord_GetTypes(),
      false,
      true,
    ),
  ];
}
