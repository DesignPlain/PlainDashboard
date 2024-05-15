import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ManagedSslCertificateManaged {
  /*
Domains for which a managed SSL certificate will be valid.  Currently,
there can be up to 100 domains in this list.
*/
  Domains?: Array<string>;
}

export function Compute_ManagedSslCertificateManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Domains",
      "Domains for which a managed SSL certificate will be valid.  Currently,\nthere can be up to 100 domains in this list.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
