import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  clouddomains_RegistrationDnsSettingsCustomDns,
  clouddomains_RegistrationDnsSettingsCustomDns_GetTypes,
} from "./clouddomains_RegistrationDnsSettingsCustomDns";
import {
  clouddomains_RegistrationDnsSettingsGlueRecord,
  clouddomains_RegistrationDnsSettingsGlueRecord_GetTypes,
} from "./clouddomains_RegistrationDnsSettingsGlueRecord";

export interface clouddomains_RegistrationDnsSettings {
  /*
Configuration for an arbitrary DNS provider.
Structure is documented below.
*/
  customDns?: clouddomains_RegistrationDnsSettingsCustomDns;

  /*
The list of glue records for this Registration. Commonly empty.
Structure is documented below.
*/
  glueRecords?: Array<clouddomains_RegistrationDnsSettingsGlueRecord>;
}

export function clouddomains_RegistrationDnsSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customDns",
      "Configuration for an arbitrary DNS provider.\nStructure is documented below.",
      () => clouddomains_RegistrationDnsSettingsCustomDns_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "glueRecords",
      "The list of glue records for this Registration. Commonly empty.\nStructure is documented below.",
      () => clouddomains_RegistrationDnsSettingsGlueRecord_GetTypes(),
      false,
      true,
    ),
  ];
}
