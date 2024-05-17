import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_DomainMappingSpec {
  /*
The mode of the certificate.
Default value is `AUTOMATIC`.
Possible values are: `NONE`, `AUTOMATIC`.

- - -
*/
  CertificateMode?: string;

  /*
If set, the mapping will override any mapping set before this spec was set.
It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning.
*/
  ForceOverride?: boolean;

  /*
The name of the Cloud Run Service that this DomainMapping applies to.
The route must exist.
*/
  RouteName?: string;
}

export function Cloudrun_DomainMappingSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "RouteName",
      "The name of the Cloud Run Service that this DomainMapping applies to.\nThe route must exist.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CertificateMode",
      "The mode of the certificate.\nDefault value is `AUTOMATIC`.\nPossible values are: `NONE`, `AUTOMATIC`.\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ForceOverride",
      "If set, the mapping will override any mapping set before this spec was set.\nIt is recommended that the user leaves this empty to receive an error\nwarning about a potential conflict and only set it once the respective UI\nhas given such a warning.",
      [],
      false,
      true,
    ),
  ];
}
