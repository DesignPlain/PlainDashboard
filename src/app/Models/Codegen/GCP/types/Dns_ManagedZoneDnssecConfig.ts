import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ManagedZoneDnssecConfigDefaultKeySpec,
  Dns_ManagedZoneDnssecConfigDefaultKeySpec_GetTypes,
} from "./Dns_ManagedZoneDnssecConfigDefaultKeySpec";

export interface Dns_ManagedZoneDnssecConfig {
  // Identifies what kind of resource this is
  Kind?: string;

  /*
Specifies the mechanism used to provide authenticated denial-of-existence responses.
non_existence can only be updated when the state is `off`.
Possible values are: `nsec`, `nsec3`.
*/
  NonExistence?: string;

  /*
Specifies whether DNSSEC is enabled, and what mode it is in
Possible values are: `off`, `on`, `transfer`.
*/
  State?: string;

  /*
Specifies parameters that will be used for generating initial DnsKeys
for this ManagedZone. If you provide a spec for keySigning or zoneSigning,
you must also provide one for the other.
default_key_specs can only be updated when the state is `off`.
Structure is documented below.
*/
  DefaultKeySpecs?: Array<Dns_ManagedZoneDnssecConfigDefaultKeySpec>;
}

export function Dns_ManagedZoneDnssecConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Kind",
      "Identifies what kind of resource this is",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NonExistence",
      "Specifies the mechanism used to provide authenticated denial-of-existence responses.\nnon_existence can only be updated when the state is `off`.\nPossible values are: `nsec`, `nsec3`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "Specifies whether DNSSEC is enabled, and what mode it is in\nPossible values are: `off`, `on`, `transfer`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DefaultKeySpecs",
      "Specifies parameters that will be used for generating initial DnsKeys\nfor this ManagedZone. If you provide a spec for keySigning or zoneSigning,\nyou must also provide one for the other.\ndefault_key_specs can only be updated when the state is `off`.\nStructure is documented below.",
      Dns_ManagedZoneDnssecConfigDefaultKeySpec_GetTypes(),
      false,
      false,
    ),
  ];
}
