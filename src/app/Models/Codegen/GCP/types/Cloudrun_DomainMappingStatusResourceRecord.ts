import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_DomainMappingStatusResourceRecord {
  // Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain
  Name?: string;

  /*
(Output)
Data for this record. Values vary by record type, as defined in RFC 1035
(section 5) and RFC 1034 (section 3.6.1).
*/
  Rrdata?: string;

  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  Type?: string;
}

export function Cloudrun_DomainMappingStatusResourceRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Rrdata",
      "(Output)\nData for this record. Values vary by record type, as defined in RFC 1035\n(section 5) and RFC 1034 (section 3.6.1).",
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
