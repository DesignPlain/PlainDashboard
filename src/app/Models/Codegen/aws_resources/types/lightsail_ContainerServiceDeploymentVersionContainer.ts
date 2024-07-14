import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lightsail_ContainerServiceDeploymentVersionContainer {
  // The name for the container.
  containerName?: string;

  // A key-value map of the environment variables of the container.
  environment?: Map<string, string>;

  // The name of the image used for the container. Container images sourced from your Lightsail container service, that are registered and stored on your service, start with a colon (`:`). For example, `:container-service-1.mystaticwebsite.1`. Container images sourced from a public registry like Docker Hub don't start with a colon. For example, `nginx:latest` or `nginx`.
  image?: string;

  // A key-value map of the open firewall ports of the container. Valid values: `HTTP`, `HTTPS`, `TCP`, `UDP`.
  ports?: Map<string, string>;

  // The launch command for the container. A list of string.
  commands?: Array<string>;
}

export function lightsail_ContainerServiceDeploymentVersionContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "containerName",
      "The name for the container.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "environment",
      "A key-value map of the environment variables of the container.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "The name of the image used for the container. Container images sourced from your Lightsail container service, that are registered and stored on your service, start with a colon (`:`). For example, `:container-service-1.mystaticwebsite.1`. Container images sourced from a public registry like Docker Hub don't start with a colon. For example, `nginx:latest` or `nginx`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ports",
      "A key-value map of the open firewall ports of the container. Valid values: `HTTP`, `HTTPS`, `TCP`, `UDP`.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "commands",
      "The launch command for the container. A list of string.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
