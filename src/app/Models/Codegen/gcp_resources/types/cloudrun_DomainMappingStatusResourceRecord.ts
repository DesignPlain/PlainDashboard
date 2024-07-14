import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudrun_DomainMappingStatusResourceRecord {
  // Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain
  name?: string;

  /*
(Output)
Data for this record. Values vary by record type, as defined in RFC 1035
(section 5) and RFC 1034 (section 3.6.1).
*/
  rrdata?: string;

  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  type?: string;
}

export function cloudrun_DomainMappingStatusResourceRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Resource record type. Example: `AAAA`.\nPossible values are: `A`, `AAAA`, `CNAME`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rrdata",
      "(Output)\nData for this record. Values vary by record type, as defined in RFC 1035\n(section 5) and RFC 1034 (section 3.6.1).",
      [],
      false,
      false,
    ),
  ];
}
