import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector {
  /*
The resource types to run the detector on.

- - -
*/
  ResourceTypes?: Array<string>;
}

export function Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigResourceSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ResourceTypes",
      "The resource types to run the detector on.\n\n- - -",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
