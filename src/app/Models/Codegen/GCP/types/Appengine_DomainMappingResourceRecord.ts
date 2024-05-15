import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_DomainMappingResourceRecord {
  // Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
  Name?: string;

  // Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
  Rrdata?: string;

  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  Type?: string;
}

export function Appengine_DomainMappingResourceRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Rrdata",
      "Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Resource record type. Example: `AAAA`.\nPossible values are: `A`, `AAAA`, `CNAME`.",
      [],
      false,
      false,
    ),
  ];
}
