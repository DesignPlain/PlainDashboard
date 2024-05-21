import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_ManagedSslCertificateManaged {
  /*
Domains for which a managed SSL certificate will be valid.  Currently,
there can be up to 100 domains in this list.
*/
  domains?: Array<string>;
}

export function compute_ManagedSslCertificateManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "domains",
      "Domains for which a managed SSL certificate will be valid.  Currently,\nthere can be up to 100 domains in this list.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
