import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface certificatemanager_TrustConfigTrustStoreIntermediateCa {
  /*
PEM intermediate certificate used for building up paths for validation.
Each certificate provided in PEM format may occupy up to 5kB.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  pemCertificate?: string;
}

export function certificatemanager_TrustConfigTrustStoreIntermediateCa_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pemCertificate",
      "PEM intermediate certificate used for building up paths for validation.\nEach certificate provided in PEM format may occupy up to 5kB.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      false,
    ),
  ];
}
