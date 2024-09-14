import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail {
  /*
Whether the resource is compliant.
- `keys_with_noncompliant_values ` - Set of tag keys with non-compliant tag values.
- `non_compliant_keys ` - Set of non-compliant tag keys.
*/
  complianceStatus?: boolean;

  //
  keysWithNoncompliantValues?: Array<string>;

  //
  nonCompliantKeys?: Array<string>;
}

export function resourcegroupstaggingapi_getResourcesResourceTagMappingListComplianceDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "complianceStatus",
      "Whether the resource is compliant.\n* `keys_with_noncompliant_values ` - Set of tag keys with non-compliant tag values.\n* `non_compliant_keys ` - Set of non-compliant tag keys.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "keysWithNoncompliantValues",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nonCompliantKeys",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
