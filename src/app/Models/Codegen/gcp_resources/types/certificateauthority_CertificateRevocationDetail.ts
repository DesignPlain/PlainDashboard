import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface certificateauthority_CertificateRevocationDetail {
  /*
(Output)
The time at which this Certificate was revoked.
*/
  revocationTime?: string;

  /*
(Output)
Indicates why a Certificate was revoked.
*/
  revocationState?: string;
}

export function certificateauthority_CertificateRevocationDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "revocationState",
      "(Output)\nIndicates why a Certificate was revoked.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "revocationTime",
      "(Output)\nThe time at which this Certificate was revoked.",
      [],
      false,
      false,
    ),
  ];
}
