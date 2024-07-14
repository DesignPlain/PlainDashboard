import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dns_ManagedZoneDnssecConfigDefaultKeySpec,
  dns_ManagedZoneDnssecConfigDefaultKeySpec_GetTypes,
} from "./dns_ManagedZoneDnssecConfigDefaultKeySpec";

export interface dns_ManagedZoneDnssecConfig {
  /*
Specifies parameters that will be used for generating initial DnsKeys
for this ManagedZone. If you provide a spec for keySigning or zoneSigning,
you must also provide one for the other.
default_key_specs can only be updated when the state is `off`.
Structure is documented below.
*/
  defaultKeySpecs?: Array<dns_ManagedZoneDnssecConfigDefaultKeySpec>;

  // Identifies what kind of resource this is
  kind?: string;

  /*
Specifies the mechanism used to provide authenticated denial-of-existence responses.
non_existence can only be updated when the state is `off`.
Possible values are: `nsec`, `nsec3`.
*/
  nonExistence?: string;

  /*
Specifies whether DNSSEC is enabled, and what mode it is in
Possible values are: `off`, `on`, `transfer`.
*/
  state?: string;
}

export function dns_ManagedZoneDnssecConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "defaultKeySpecs",
      "Specifies parameters that will be used for generating initial DnsKeys\nfor this ManagedZone. If you provide a spec for keySigning or zoneSigning,\nyou must also provide one for the other.\ndefault_key_specs can only be updated when the state is `off`.\nStructure is documented below.",
      dns_ManagedZoneDnssecConfigDefaultKeySpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kind",
      "Identifies what kind of resource this is",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nonExistence",
      "Specifies the mechanism used to provide authenticated denial-of-existence responses.\nnon_existence can only be updated when the state is `off`.\nPossible values are: `nsec`, `nsec3`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Specifies whether DNSSEC is enabled, and what mode it is in\nPossible values are: `off`, `on`, `transfer`.",
      [],
      false,
      false,
    ),
  ];
}
