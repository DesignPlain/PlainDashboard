import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificatemanager_TrustConfigTrustStoreTrustAnchor {
  /*
PEM root certificate of the PKI used for validation.
Each certificate provided in PEM format may occupy up to 5kB.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PemCertificate?: string;
}

export function Certificatemanager_TrustConfigTrustStoreTrustAnchor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PemCertificate",
      "PEM root certificate of the PKI used for validation.\nEach certificate provided in PEM format may occupy up to 5kB.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
  ];
}
