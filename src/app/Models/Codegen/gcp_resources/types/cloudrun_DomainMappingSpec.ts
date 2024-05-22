import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudrun_DomainMappingSpec {
  /*
If set, the mapping will override any mapping set before this spec was set.
It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning.
*/
  forceOverride?: boolean;

  /*
The name of the Cloud Run Service that this DomainMapping applies to.
The route must exist.
*/
  routeName?: string;

  /*
The mode of the certificate.
Default value is `AUTOMATIC`.
Possible values are: `NONE`, `AUTOMATIC`.

- - -
*/
  certificateMode?: string;
}

export function cloudrun_DomainMappingSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "forceOverride",
      "If set, the mapping will override any mapping set before this spec was set.\nIt is recommended that the user leaves this empty to receive an error\nwarning about a potential conflict and only set it once the respective UI\nhas given such a warning.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "routeName",
      "The name of the Cloud Run Service that this DomainMapping applies to.\nThe route must exist.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "certificateMode",
      "The mode of the certificate.\nDefault value is `AUTOMATIC`.\nPossible values are: `NONE`, `AUTOMATIC`.\n\n- - -",
      [],
      false,
      true,
    ),
  ];
}
