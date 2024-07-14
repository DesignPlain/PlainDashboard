import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface eks_AccessPolicyAssociationAccessScope {
  // The namespaces to which the access scope applies when type is namespace.
  namespaces?: Array<string>;

  // Valid values are `namespace` or `cluster`.
  type?: string;
}

export function eks_AccessPolicyAssociationAccessScope_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "namespaces",
      "The namespaces to which the access scope applies when type is namespace.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Valid values are `namespace` or `cluster`.",
      [],
      true,
      true,
    ),
  ];
}
