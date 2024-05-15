import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_ApplicationUrlDispatchRulesDispatchRule {
  /*
Domain name to match against. The wildcard "-" is supported if specified before a period: "-.".
Defaults to matching all domains: "-".
*/
  Domain?: string;

  /*
Pathname within the host. Must start with a "/". A single "-" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.
*/
  Path?: string;

  /*
Pathname within the host. Must start with a "/". A single "-" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

- - -
*/
  Service?: string;
}

export function Appengine_ApplicationUrlDispatchRulesDispatchRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Domain",
      'Domain name to match against. The wildcard "*" is supported if specified before a period: "*.".\nDefaults to matching all domains: "*".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      'Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.\nThe sum of the lengths of the domain and path may not exceed 100 characters.',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Service",
      'Pathname within the host. Must start with a "/". A single "*" can be included at the end of the path.\nThe sum of the lengths of the domain and path may not exceed 100 characters.\n\n- - -',
      [],
      true,
      false,
    ),
  ];
}
