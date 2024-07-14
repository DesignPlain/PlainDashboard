import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface securitycenter_NotificationConfigStreamingConfig {
  /*
Expression that defines the filter to apply across create/update
events of assets or findings as specified by the event type. The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.
Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.
The supported operators are:
- = for all value types.
- >, <, >=, <= for integer values.
- :, meaning substring matching, for strings.
The supported value types are:
- string literals in quotes.
- integer literals without quotes.
- boolean literals true and false without quotes.
See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

- - -
*/
  filter?: string;
}

export function securitycenter_NotificationConfigStreamingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "filter",
      "Expression that defines the filter to apply across create/update\nevents of assets or findings as specified by the event type. The\nexpression is a list of zero or more restrictions combined via\nlogical operators AND and OR. Parentheses are supported, and OR\nhas higher precedence than AND.\nRestrictions have the form <field> <operator> <value> and may have\na - character in front of them to indicate negation. The fields\nmap to those defined in the corresponding resource.\nThe supported operators are:\n* = for all value types.\n* >, <, >=, <= for integer values.\n* :, meaning substring matching, for strings.\nThe supported value types are:\n* string literals in quotes.\n* integer literals without quotes.\n* boolean literals true and false without quotes.\nSee\n[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)\nfor information on how to write a filter.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
