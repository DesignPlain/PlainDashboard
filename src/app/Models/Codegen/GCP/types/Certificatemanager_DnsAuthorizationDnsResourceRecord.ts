import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificatemanager_DnsAuthorizationDnsResourceRecord {
  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  Name?: string;

  /*
(Output)
Type of the DNS Resource Record.
*/
  Type?: string;

  /*
(Output)
Data of the DNS Resource Record.
*/
  Data?: string;
}

export function Certificatemanager_DnsAuthorizationDnsResourceRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the resource; provided by the client when the resource is created.\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,\nand all following characters must be a dash, underscore, letter or digit.\n\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "(Output)\nType of the DNS Resource Record.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Data",
      "(Output)\nData of the DNS Resource Record.",
      [],
      false,
      false,
    ),
  ];
}
