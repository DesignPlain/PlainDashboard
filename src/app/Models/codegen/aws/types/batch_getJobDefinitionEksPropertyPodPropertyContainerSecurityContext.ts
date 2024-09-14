import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext {
  // When this parameter is true, the container is given elevated permissions on the host container instance (similar to the root user).
  privileged?: boolean;

  //
  readOnlyRootFileSystem?: boolean;

  // When this parameter is specified, the container is run as the specified group ID (gid). If this parameter isn't specified, the default is the group that's specified in the image metadata.
  runAsGroup?: number;

  // When this parameter is specified, the container is run as a user with a uid other than 0. If this parameter isn't specified, so such rule is enforced.
  runAsNonRoot?: boolean;

  // When this parameter is specified, the container is run as the specified user ID (uid). If this parameter isn't specified, the default is the user that's specified in the image metadata.
  runAsUser?: number;
}

export function batch_getJobDefinitionEksPropertyPodPropertyContainerSecurityContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "runAsUser",
      "When this parameter is specified, the container is run as the specified user ID (uid). If this parameter isn't specified, the default is the user that's specified in the image metadata.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "privileged",
      "When this parameter is true, the container is given elevated permissions on the host container instance (similar to the root user).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "readOnlyRootFileSystem",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "runAsGroup",
      "When this parameter is specified, the container is run as the specified group ID (gid). If this parameter isn't specified, the default is the group that's specified in the image metadata.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "runAsNonRoot",
      "When this parameter is specified, the container is run as a user with a uid other than 0. If this parameter isn't specified, so such rule is enforced.",
      () => [],
      true,
      false,
    ),
  ];
}
