import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
