import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codeartifact_RepositoryUpstream {
  // The name of an upstream repository.
  repositoryName?: string;
}

export function codeartifact_RepositoryUpstream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "The name of an upstream repository.",
      () => [],
      true,
      false,
    ),
  ];
}
