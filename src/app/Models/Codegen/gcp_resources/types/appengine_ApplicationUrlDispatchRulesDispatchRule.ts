import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appengine_ApplicationUrlDispatchRulesDispatchRule {
  /*
Domain name to match against. The wildcard "-" is supported if specified before a period: "-.".
Defaults to matching all domains: "-".
*/
  domain?: string;

  /*
Pathname within the host. Must start with a "/". A single "-" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
*/
  path?: string;

  /*
Pathname within the host. Must start with a "/". A single "-" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

- - -
*/
  service?: string;
}

export function appengine_ApplicationUrlDispatchRulesDispatchRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domain",
      'Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".\nDefaults to matching all domains: "*".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      'Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.\nThe sum of the lengths of the domain and path may not exceed 100 characters.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      'Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.\nThe sum of the lengths of the domain and path may not exceed 100 characters.\n\n- - -',
      [],
      true,
      false,
    ),
  ];
}
