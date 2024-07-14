import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface eks_NodeGroupTaint {
  // The effect of the taint. Valid values: `NO_SCHEDULE`, `NO_EXECUTE`, `PREFER_NO_SCHEDULE`.
  effect?: string;

  // The key of the taint. Maximum length of 63.
  key?: string;

  // The value of the taint. Maximum length of 63.
  value?: string;
}

export function eks_NodeGroupTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key of the taint. Maximum length of 63.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the taint. Maximum length of 63.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "effect",
      "The effect of the taint. Valid values: `NO_SCHEDULE`, `NO_EXECUTE`, `PREFER_NO_SCHEDULE`.",
      [],
      true,
      false,
    ),
  ];
}
