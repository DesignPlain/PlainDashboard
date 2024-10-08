import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appengine_DomainMappingResourceRecord {
  // Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
  name?: string;

  // Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
  rrdata?: string;

  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  type?: string;
}

export function appengine_DomainMappingResourceRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      "Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rrdata',
      'Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Resource record type. Example: `AAAA`.\nPossible values are: `A`, `AAAA`, `CNAME`.',
      () => [],
      false,
      false,
    ),
  ];
}
