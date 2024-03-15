import { RegistrationDnsSettingsCustomDns } from "./RegistrationDnsSettingsCustomDns";
import { RegistrationDnsSettingsGlueRecord } from "./RegistrationDnsSettingsGlueRecord";

export interface RegistrationDnsSettings {
  /*
Configuration for an arbitrary DNS provider.
Structure is documented below.
*/
  CustomDns?: RegistrationDnsSettingsCustomDns;

  /*
The list of glue records for this Registration. Commonly empty.
Structure is documented below.
*/
  GlueRecords?: Array<RegistrationDnsSettingsGlueRecord>;
}
